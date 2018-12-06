# -*- coding: utf-8 -*-
# this file is released under public domain and you can use without limitations

# -------------------------------------------------------------------------
# This is a sample controller
# - index is the default action of any application
# - user is required for authentication and authorization
# - download is for downloading files uploaded in the db (does streaming)
# -------------------------------------------------------------------------
import os

def index():
    # We just want to expand the template.
    return dict()
    
def music():
    # We just want to expand the template.
    return dict()

def edit():
	return dict()

def mainpage():
    # We just want to expand the template.
    return dict()
    
def mymusic():
    # We just want to expand the template.
    return dict()

def upload():
	form = SQLFORM(db.audio_info,deletable=True,fields=['audio_file'])
	if request.vars.audio_file!=None:
		form.vars.audio_title=request.vars.audio_file.filename
	if form.process().accepted:
		redirect(URL('default', 'music#mymusic'))
	elif form.errors:
		response.flash = 'form has errors'
	else:
		response.flash = 'please fill out the form'
	return dict(form=form)

def user():
    """
    exposes:
    http://..../[app]/default/user/login
    http://..../[app]/default/user/logout
    http://..../[app]/default/user/register
    http://..../[app]/default/user/profile
    http://..../[app]/default/user/retrieve_password
    http://..../[app]/default/user/change_password
    http://..../[app]/default/user/bulk_register
    use @auth.requires_login()
        @auth.requires_membership('group name')
        @auth.requires_permission('read','table name',record_id)
    to decorate functions that need access control
    also notice there is http://..../[app]/appadmin/manage/auth to allow administrator to manage users
    """
    return dict(form=auth())


@cache.action()
def download():
    """
    allows downloading of uploaded files
    http://..../[app]/default/download/[filename]
    """
    return response.download(request, db)


def call():
    """
    exposes services. for example:
    http://..../[app]/default/call/jsonrpc
    decorate with @services.jsonrpc the functions to expose
    supports xml, json, xmlrpc, jsonrpc, amfrpc, rss, csv
    """
    return service()
    
def audio_download():
	father_path=os.path.abspath(os.path.dirname(__file__)+os.path.sep+"..")
	filepath=father_path+'\\audio\\temp\\'+request.args[0]
	print filepath
	return response.stream(filepath)


