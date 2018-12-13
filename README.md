# AmazingMusic-web
1.	Prepare to use 
(1)	install the operating environment (without the environment, the music edit part can not work)
-	the folder of the library can not have the same name as the application in the folder, change it if they are the same.
(2)	test the program locally
-	download the library(two files name soundstretch and ffmpeg) in the github to your local computer
-	follow the step below to set up the environment valuable.
Windows:
Setting->system-> advanced system setting->Environment Variables
->  


 

2.	How to use and what will you see (both mobile and computer devices )
(1)	Sign up :
-	you need to agree the license first and then sign up an account by using the email address 
(2)	Upload: (mp3, wav and m4a only)
-	click  “my” in the tool bar on the left, you will see a yellow circle icon on the bottom of the right, click the icon, you will see a pop-up page 
-	choose your file (mp3, wav and m4a only), click submit, it will upload, when you see 
-	 
It means you upload the file successfully.
(3)	Play:
- click the icon in the square page
       (31)   collect the music you love
     - click the “heart” icon in the square page, when you see 
 
It means you do it right
(4)	Search:
-type the music file name in the search bar in the square page



(5)	Edit:(in the square page and my page)
-click the pencil icon in the square page or my page, it will open a pop-up page, change the value there(you can change all the value in the same time)
-click “Submit and Play”, wait for a moment, you will hear the music
(6)	Delete:
-	(My Music page), it will delete the block in the square page.
-	(My Collection page), it will delete the file in the collection page only.
3.	Some notice:
(1)	Website address: https://47.106.162.152:8000/amazingmusic/default/ 

(2)	We didn’t show the collection in the presentation since it has a bug there (the “heart” icon cannot keeping the clicking state, we had have a discussion for that, I(ChongWei Zhao) had decided to delete it since I did’t want to put a feature which has a bug in the website, but other team members insisted on having this feature, so I added it back.)


4.	General conclusion
Front End and User Interface- vue.js, html, layui,
Back End(Server for sharing )- Web2py, MySQL, jQuery
Back End(Server for editing )- Web2py, FFMPEG, SoundTouch
Version Control- GitHub
Database and File Storage- Alibaba Cloud

5.	Some Reference:
(1)	https://bitbucket.org/luca_de_alfaro/web2py_start/src/2018-10-29/ (some code from the professor homework brunch)
(2)	https://github.com/sentsin/layui
(3)	http://fontawesome.io   
(4)	https://www.mp3juices.cc/ 
(5)	https://www.ffmpeg.org/
(6)	https://mdipierro.github.io/stupid.css/index.html 
(7)	https://www.surina.net/soundtouch/soundstretch.html 
(8)	http://www.iconfont.cn/ 

6.	Bug Report
1. If you click the "heart" icon for the collection, the "heart icon" cannot keep staying "black"
2. Lost Password icon in the log in page is not work
3. After you edit a music, you (the users) will not see any music file appear in any place in the website, 
only the developers or Website manager can see the edited files 
(The edited files are saved in the "audio\temp" folder)


