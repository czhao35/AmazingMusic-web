import os
import time


# Here go your api methods.
def load_music():
    sql = "select id,audio_author,audio_title,audio_file,update_time from audio_info where  delete_tag=0 order by update_time desc"
    audios = db.executesql(sql)
    collections = db.executesql(
        "select id,audio_id from audio_collection where user_email='" + auth.user.email + "' and delete_tag=0");
    print collections
    data = []
    for audio in audios:
        collected = 0;
        for coll in collections:
            if coll[1] == audio[0]:
                collected = 1
                break

        data.append({
            "audio_id": audio[0],
            "audio_author": audio[1],
            "audio_title": audio[2],
            "audio_url": '/amazingmusic/default/download/' + audio[3],
            "create_time": audio[4],
            "duration": "04:38",
            "collected": collected
        })

    return response.json(dict(code=0, data=data))


def toggle_collection():
    sql = "insert or replace into  audio_collection (user_email,audio_id,delete_tag) values ('"+auth.user.email+"',"+str(request.vars.audio_id)+","+str(request.vars.collected)+")"
    db.executesql(sql)
    return response.json(dict(code=0))


def load_collection():
    sql = "select id,audio_author,audio_title,audio_file,update_time from audio_info where id in (select audio_id as id from audio_collection where user_email='"+auth.user.email+"' and delete_tag=0) and delete_tag=0 order by update_time desc"
    audios = db.executesql(sql)
    data = []
    for audio in audios:
        data.append({
            "audio_id": audio[0],
            "audio_author": audio[1],
            "audio_title": audio[2],
            "audio_url": '/amazingmusic/default/download/' + audio[3],
            "create_time": audio[4],
            "duration": "04:38"
        })

    return response.json(dict(code=0, data=data))


def load_my_music():
    sql = "select id,audio_author,audio_title,audio_file,update_time from audio_info where audio_author='" + auth.user.email + "' and delete_tag=0 order by update_time desc"
    audios = db.executesql(sql)
    data = []
    for audio in audios:
        data.append({
            "audio_id": audio[0],
            "audio_author": audio[1],
            "audio_title": audio[2],
            "audio_url": '/amazingmusic/default/download/' + audio[3],
            "create_time": audio[4],
            "duration": "04:38"
        })
    return response.json(dict(code=0, data=data))

def delete_my_music():
    sql = "update  audio_info set delete_tag=1 where id="+str(request.vars.audio_id)+" and audio_author='" + auth.user.email + "'"
    db.executesql(sql)
    return response.json(dict(code=0))

def trans_audio():
    t = time.time()
    filename = str(int(t))
    sql = "select audio_file from audio_info where  id=" + request.vars.id
    audio = db.executesql(sql)
    father_path = os.path.abspath(os.path.dirname(__file__) + os.path.sep + "..")
    print father_path
    source = father_path + "\\uploads\\" + audio[0][0]
    if audio[0][0].endswith(".wav") >= 0:
        print "==>wav"
        p1 = os.popen("ffmpeg -i " + source + " -f wav " + father_path + "\\audio\\temp\\" + filename + "_tmp.wav")
        print p1.read()
        source = father_path + "\\audio\\temp\\" + filename + "_tmp.wav"
    cmdstr = "soundstretch " + source + " " + father_path + "\\audio\\temp\\" + filename + ".wav " + request.vars.cmd
    print cmdstr
    p = os.popen(cmdstr)
    print p.read()
    return response.json(dict(code=0, url="/amazingmusic/default/audio_download/" + filename + ".wav"))


def load_audio_info():
    sql = "select id,audio_author,audio_title,audio_file,update_time from audio_info where  id=" + request.vars.id
    audio = db.executesql(sql)
    print audio
    data = {
        "audio_id": audio[0][0],
        "audio_author": audio[0][1],
        "audio_title": audio[0][2],
        "audio_url": '/amazingmusic/default/download/' + audio[0][3],
        "create_time": audio[0][4],
    }
    return response.json(dict(code=0, data=data))
