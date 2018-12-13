// This is the js for the default/index.html view.
var app = function() {

	var self = {};

	Vue.config.silent = false;

	self.extend = function(a, b) {
		for(var i = 0; i < b.length; i++) {
			a.push(b[i]);
		}
	};

	var enumerate = function(v) {
		var k = 0;
		return v.map(function(e) {
			e._idx = k++;
		});
	};

	self.switch_menu = function(index) {
		self.vue.selectedmenu = index;
		if(index == 0) {
			self.loadMusic();
		} else if(index == 1) {
			self.loadMyMusic();
			self.loadCollection()
		}
	}

	self.logout = function() {
		window.location.href = "/amazingmusic/default/user/logout?_next=/amazingmusic/default/index"
	}

	self.loadMyMusic = function() {
		$.get(load_my_music_url,
			function(res) {
				if(res.code == 0) {
					var data = res.data;
					self.vue.my_musics = data;
				}
			});
	}

	self.delete_my = function(e) {
		var ds = e.target.dataset;
		var id = ds.id;
		$.get(delete_my_music_url, {
				audio_id: id
			},
			function(res) {
				if(res.code == 0) {

					self.vue.my_musics = self.vue.my_musics.filter(function(elem) {
						return elem.audio_id != id
					})

				}
			});
	}
	
	self.play = function(e) {
		var ds = e.target.dataset;
		var index = ds.index;
		var playlist = self.vue.playlist;
		var exsitIndex = -1;
		
		for(var i in playlist) {
			if(playlist[i].audio_id == self.vue.my_musics[index].audio_id) {
				exsitIndex = i;
				break;
			}
		}
		if(exsitIndex > 0) {
			self.vue.playlist = self.vue.playlist.filter(function(item) {
				return item.audio_id != self.vue.my_musics[index].audio_id
			})
			self.vue.playlist.unshift(self.vue.my_musics[index]);
		} else if(exsitIndex < 0) {
			self.vue.playlist.unshift(self.vue.my_musics[index]);
		}

		self.vue.playing_index = 0;
		var url = window.location.protocol + "//" + window.location.host + self.vue.my_musics[index].audio_url;
		self.audio.src = url;
		self.audio.load(url)
		self.audio.play();

	}

	self.playcollection = function(e) {
		var ds = e.target.dataset;
		var index = ds.index;
		self.vue.playlist.unshift(self.vue.mycollections[index]);
		self.vue.playing_index = 0;
		var url = window.location.protocol + "//" + window.location.host + self.vue.mycollections[index].audio_url;
		self.audio.src = url;
		self.audio.load(url)
		self.audio.play();
	}

	self.hide_edit = function() {
		self.vue.showedit = false;
		self.audio.pause();
	}

	self.show_edit = function() {
		self.vue.showedit = true;
	}

	self.edit = function(e) {
		var ds = e.target.dataset;
		var index = ds.index;
		self.id = self.vue.musics[index].audio_id;
		self.show_edit();
	}

	self.editmy = function(e) {
		var ds = e.target.dataset;
		var index = ds.index;
		self.id = self.vue.my_musics[index].audio_id;
		self.show_edit();
	}

	self.editc = function(e) {
		var ds = e.target.dataset;
		var index = ds.index;
		self.id = self.vue.mycollections[index].audio_id;
		self.show_edit();
	}

	self.trans = function(e) {
		console.log("edit")
		$.get(trans_audio_url, {
				id: self.id,
				cmd: "-tempo=" + params[0] + " -pitch=" + params[1] + " -rate=" + params[2]
			},
			function(res) {
				if(res.code == 0) {
					var url = window.location.protocol + "//" + window.location.host + res.url;
					self.audio.src = url;
					self.audio.load(url)
					self.audio.play();
				}
			});
	}

	self.openUpload = function() {
		layui.use('layer', function() {
			var layer = layui.layer;
			layer.open({
				title: "upload file",
				area: ['400px', '300px'],
				type: 2,
				content: "./upload",
				success: function(layero, index) {
					var body = layer.getChildFrame('body', index);
					body.css('padding',"16px");
					body.find('#audio_info_audio_file').attr("accept",".wav,.mp3,.m4a")
				}
			});
		});
	}

	self.deletecoll = function(e) {
		var ds = e.target.dataset;
		var id = ds.id;
		$.get(toggle_collect_url, {
				audio_id: id,
				collected: 1
			},
			function(res) {
				if(res.code == 0) {

					self.vue.mycollections = self.vue.mycollections.filter(function(elem) {
						return elem.audio_id != id
					})

				}
			});
	}

	self.loadCollection = function() {
		$.get(load_collection_url,
			function(res) {
				if(res.code == 0) {
					var data = res.data;
					self.vue.mycollections = data;
				}
			});
	}

	self.switchTab = function(tab) {
		self.vue.tabindex = parseInt(tab);
	}
	
	self.togglePlay = function(e) {
		var index = e.target.dataset.index;
		if(index != self.vue.playing_index) {
			self.vue.playing_index = index;
			self.audio.src = window.location.protocol + "//" + window.location.host + self.vue.musics[index].audio_url;
			self.audio.load();
			var currTotal = 0
			self.audio.ondurationchange = function() {
				currTotal = parseInt(self.audio.duration);
			}
			self.audio.play();
			self.vue.playing = true;
			if(self.timer) {
				window.clearInterval(self.timer);
			}
			
			self.timer = setInterval(function() {
				var c = parseInt(self.audio.currentTime);
				var m = parseInt(c / 60);
				var s = c % 60;
				self.vue.currtime = (m < 10 ? '0' + m : m) + ":" + (s < 10 ? '0' + s : s);
				if(currTotal > 0) {
					self.vue.currProgress = c * 100 / currTotal;
				}
				if(currTotal - c < 1 && currTotal > 0) {
					window.clearInterval(self.timer);
					self.timer = null;
				}
			}, 300)
		} else {
			if(self.audio.paused) {
				self.audio.play();
				self.vue.playing = true;
			} else {
				self.audio.pause();
				self.vue.playing = false;
			}
		}
	}

	self.loadMusic = function() {
		$.get(load_music_url,
			function(res) {
				if(res.code == 0) {
					var data = res.data;
					self.vue.musics = data;
				}
			});
	}

	self.toggleCollect = function(e) {
		var collected = e.target.dataset.collected;
		var id = e.target.dataset.id;
		$.get(toggle_collect_url, {
				collected: collected,
				audio_id: id
			},
			function(res) {
				if(res.code == 0) {
					var musics = self.vue.musics;
					for(var i in musics) {
						var music = musics[i];
						if(musics[i].audio_id == id) {
							music.collected = (collected == 0 ? 1 : 0);
							self.vue.musics.splice(parseInt(i), 1, music)
							break;
						}
					}

				}
			});
	}

	self.seekprogress = function(e) {
		if(self.vue.playing) {
			self.audio.currentTime = (parseInt(e.offsetX * (self.audio.duration) / $('.progress').width()))
		}
	}

	self.search = function(e) {
		var keyw = e.target.value;
		if(keyw.length > 0) {
			$.get(search_music_url, {
				key: keyw
			}, function(res) {
				if(res.code == 0) {
					var data = res.data;
					self.vue.musics = data;
				}
			});
		} else {
			self.loadMusic();
		}
	}

	self.vue = new Vue({
		el: "#main",
		delimiters: ['${', '}'],
		unsafeDelimiters: ['!{', '}'],
		data: {
			munus: [{
				name: "square",
				icon: "icon-iconfontguangchang"
			}, {
				name: "my",
				icon: "icon-wode"
			}],
			selectedmenu: 0,
			my_musics: [],
			mycollections: [],
			playlist: [],
			curr_vol: 80,
			playing_index: -1,
			playing_src: "",
			tabindex: 0,
			musics: [],
			curr_vol: 80,
			currtime: "00:00",
			currProgress: 0,
			playing: false,
			showedit: false

		},
		methods: {
			switch_menu: self.switch_menu,
			logout: self.logout,
			upload: self.upload,
			loadMyMusic: self.loadMyMusic,
			delete_my: self.delete_my,
			play: self.play,
			playcollection: self.playcollection,
			edit: self.edit,
			editmy: self.editmy,
			openUpload: self.openUpload,
			editc: self.editc,
			deletecoll: self.deletecoll,
			switchTab: self.switchTab,
			togglePlay: self.togglePlay,
			toggleCollect: self.toggleCollect,
			trans: self.trans,
			hide_edit: self.hide_edit,
			seekprogress: self.seekprogress,
			search: self.search
		}
	});

	if(is_logged_in) {
		self.loadMusic();
		self.audio = document.getElementById('player');
	}
	var params = [0, 0, 0]

	layui.use('slider', function() {
		var slider = layui.slider;

		slider.render({
			elem: '#slide1',
			min: -95,
			value: 0,
			max: 295,
			change: function(value) {
				params[0] = value;
			}
		});
		slider.render({
			elem: '#slide2',
			min: -60,
			max: 60,
			change: function(value) {
				params[1] = value;
			}
		});
		slider.render({
			elem: '#slide3',
			min: -95,
			value: 0,
			max: 295,
			change: function(value) {
				params[2] = value;
			}
		});
	});

	return self;
};

var APP = null;

jQuery(function() {
	APP = app();
});