// This is the js for the default/index.html view.
var app = function() {

	var self = {};

	Vue.config.silent = false;

	self.extend = function(a, b) {
		for(var i = 0; i < b.length; i++) {
			a.push(b[i]);
		}
	};
	self.timer = null;

	var enumerate = function(v) {
		var k = 0;
		return v.map(function(e) {
			e._idx = k++;
		});
	};

	self.trans = function(e) {
		$.get(trans_audio_url, {
				id: self.id,
				cmd: "-tempo=" + params[0] + " -pitch=" + params[1] + " -rate=" + params[2]
			},
			function(res) {
				if(res.code == 0) {
					var url = window.location.protocol+"//" + window.location.host + res.url;
					self.audio.src = url;
					self.audio.load(url)
					self.audio.play();
				}
			});
	}

	self.play_audio = function(url) {

	}
	self.load_audio_info = function() {
		$.get(load_audio_info_url, {
				id: self.id
			},
			function(res) {
				if(res.code == 0) {
					var data = res.data;
					self.vue.musics = data;
				}
			});
	}

	self.vue = new Vue({
		el: "#trans-audio",
		delimiters: ['${', '}'],
		unsafeDelimiters: ['!{', '}'],
		data: {

		},
		methods: {
			trans: self.trans
		}
	});
	self.id = window.location.href.split("=")[1];
	self.audio = document.getElementById('audioplayer');
	self.load_audio_info();
	return self;
};

var APP = null;

jQuery(function() {
	APP = app();
});