# AmazingMusic-web
Instructions to run locally with music editing functionality.
1.	Prepare environment

(1)	install the operating environment (without the environment, the music editing part can not work)
-	the folder of the libraries can not have the same name as the application in the folder, change it if they are the same.

(2)	test the program locally
-	download the libraries(two files name soundstretch and ffmpeg) in the Libraries forlder in this repository to your computer
-	follow the step below to set up the environment.
Windows:
Setting->system-> advanced system setting->Environment Variables

2.	How to use website and what you will see (both mobile and computer devices )
(1)	Sign up :
-	you need to agree the license first and then sign up an account by using the email address
(2)	Upload: (mp3, wav and m4a only)
-	click  “my” in the tool bar on the left, you will see a yellow circle icon on the bottom of the right, click the icon, you will see a pop-up page
-	choose your file (mp3, wav and m4a only), click submit, it will upload
(3)	Play:
- click the icon in the square page
(4) Collect the music you love
 - click the “heart” icon in the square page
(5)	Search:
-type the music file name in the search bar in the square page
(6)	Edit:(in the square page and my page)
-click the pencil icon in the square page or my page, it will open a pop-up page, change the value there(you can change all the values at the same time)
-click “Submit and Play”, wait for a moment, you will hear the music
(7)	Delete:
-	(My Music page), it will delete the block in the square page.
-	(My Collection page), it will delete the file in the collection page only.


3.	Some notice:
(1)	Website address: https://47.106.162.152:8000/amazingmusic/default/

(2)	We didn’t show the collection in the presentation since it has a bug there (the “heart” icon cannot keep the clicking state, we had a discussion about that, ChongWei Zhao had decided to delete it since he didn’t want to put a feature which was buggy in the website, but other team members insisted on having this feature, so he added it back.)

(3) The web application may not work for some browsers. When I used "IE" browser, I can not go to the main page, but when I used "Chrome" to try it again, it worked.


4.	General conclusion
Front End and User Interface- vue.js, html, layui,
Back End(Server for sharing )- Web2py, MySQL, jQuery
Back End(Server for editing )- Web2py, FFMPEG, SoundTouch
Version Control- GitHub
Database and File Storage- Alibaba Cloud

5.	Some Reference:
(1)	https://bitbucket.org/luca_de_alfaro/web2py_start/src/2018-10-29/ (some code from the professor homework)
(2)	https://github.com/sentsin/layui
(3)	http://fontawesome.io   
(4)	https://www.mp3juices.cc/
(5)	https://www.ffmpeg.org/
(6)	https://mdipierro.github.io/stupid.css/index.html
(7)	https://www.surina.net/soundtouch/soundstretch.html
(8)	http://www.iconfont.cn/
(9) https://github.com/leemanwhelan/AmazingMusic

6.	Bug Report
1. If you click the "heart" icon for the collection, the "heart icon" cannot keep staying "black"
2. Lost Password icon in the log in page is not work
3. After you edit a music, you (the users) will not see any music file appear in any place in the website,
only the developers or Website manager can see the edited files
(The edited files are saved in the "audio\temp" folder)

7. The relationship with the AmazingMusic in UCSC CS115 Summer 2018
1. The idea of AmazingMusic-web come from the AmazingMusic in UCSC CS115 Summer 2018
2. Amazing Music-web is a website which allow its users to play, edit and share music, the users can upload their music in anywhere with either moblie or computer devices(computer and Android cell phone). Amzing Music is a windows app which also can allow its users to play, edit and share music but the users can not upload their their music in anywhere with any devices. The UI of Amazing Music-web is better than the Amazing Music also.
