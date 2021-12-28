from os import environ
import os , uuid ,pdfkit 
from flask import Flask, request, render_template , send_file
from types import SimpleNamespace
import requests ,json
from datetime import datetime   

def plaintemplatepdf():   
    print("plaintemplatepdf")         
    print(request.root_url + "/PlainTemplate")
    pdf = pdfkit.from_url(request.root_url + "/PlainTemplate", "templates/template.pdf")
    return send_file(
            'templates/template.pdf',
            mimetype="pdf",
            download_name="Wish List Reminder Page.pdf",
            as_attachment=True,
                    )