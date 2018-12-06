# Define your tables below (or better in another model file) for example
#
# >>> db.define_table('mytable', Field('myfield', 'string'))
#
# Fields can be 'string','text','password','integer','double','boolean'
#       'date','time','datetime','blob','upload', 'reference TABLENAME'
# There is an implicit 'id integer autoincrement' field
# Consult manual for more options, validators, etc.




# after defining tables, uncomment below to enable auditing
# auth.enable_record_versioning(db)


import datetime


def get_user_email():
    return None if auth.user is None else auth.user.email

def get_current_time():
    return datetime.datetime.utcnow()

db.define_table('audio_info',
                Field('audio_author', default=get_user_email()),
                Field('audio_title'),
                Field('audio_file','upload'),
                Field('update_time', 'datetime', default=get_current_time()),
                Field('delete_tag', 'integer', default=0),
                )

                
db.define_table('audio_collection',
                Field('user_email'), # The user who thumbed, easier to just write the email here.
                Field('audio_id', 'reference audio_info'), # The thumbed post
                Field('update_time','datetime', default=get_current_time()), 
                Field('delete_tag', 'integer', default=0)
                )
db.executesql('CREATE UNIQUE INDEX IF NOT EXISTS  collection on  audio_collection(`user_email`, `audio_id`);')