from os import environ
from flask import Flask, request, render_template 
from types import SimpleNamespace
import requests ,json
from datetime import datetime

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
  
