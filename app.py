from os import environ
import os , uuid ,pdfkit 
from flask import Flask, request, render_template , send_file
from types import SimpleNamespace
import requests ,json
from datetime import datetime  
import templates.ResumeTemplates.resume as resume
#from flask_weasyprint import HTML, render_pdf
#from tkinter import *
#from tkinter import  ttk
#from tkinter.filedialog import asksaveasfile
 

app = Flask(__name__)
 


@app.route("/hello/<name>")
def hello_there(name = None):
    return render_template(
        "layout.html" 
    )   

@app.route("/")
@app.route('/Dictionary')
def Dictionary():
    """Renders the about page."""
    return render_template(
        'Dictionary.html',
        title='Dictionary',
        year=datetime.now().year,
        message=''
    )
     
@app.route('/Marvel')
def Marvel():
    """Renders the about page."""
    return render_template(
        'Marvel.html',
        title='Marvel',
        year=datetime.now().year,
        message='Under Construction !!!'
    )
    
@app.route('/Resume')
def Resume():
    """Renders the about page."""
    return render_template(
        'Resume.html',
        title='Resume',
        year=datetime.now().year,
        message='Under Construction dfgdfgg !!!'
    )

 

#@app.route('/pdfgen', methods=['GET','POST'])
@app.route('/pdfgen')
def pdfgen():  
    #if request.method == "POST":
    print("pdf gen")         
    print(request.base_url.removesuffix("pdfgen"))
    pdf = pdfkit.from_url(request.base_url.removesuffix("pdfgen") + "Resume", "templates/template.pdf")
    return send_file(
            'templates/template.pdf',
            mimetype="pdf",
            download_name="Wish List Reminder Page.pdf",
            as_attachment=True,
                    )
         
         
        

@app.route('/Dictionarysearch', methods=['GET','POST'])
def Dictionarysearch():
    if request.method == "POST":
        try:
            print(request.form['searchtext'])
            searchtxt = "https://api.dictionaryapi.dev/api/v2/entries/en/" + request.form['searchtext']
            #searchtxt = "https://api.dictionaryapi.dev/api/v2/entries/en/" + str(searchtext)
            r = requests.get(searchtxt) 
            json_data = json.loads(r.text ,object_hook=lambda d: SimpleNamespace(**d))
            return render_template("Dictionary.html", title='Dictionary', datas = json_data , error = '')
        except Exception as e:
            print(e)    
            return render_template("Dictionary.html", title='Dictionary' ,datas = {} , error = "No Search found for the word " + request.form['searchtext'])
    else:
        return render_template("Dictionary.html", title='Dictionary' ,datas = {} , error = "" )    


@app.route('/PlainTemplate')
def PlainTemplate():
    print("plaintemplate") 
    return render_template(
        'ResumeTemplates/PlainTemplate.html')


@app.route('/plaintemplatepdf')
def plaintemplatepdf(): 
    return resume.plaintemplatepdf()

@app.route("/calculator")
def calculator():
    return render_template("calculator.html",title="Calculator")






      
