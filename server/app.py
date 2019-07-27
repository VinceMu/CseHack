from flask import *
import controller
import json

app = Flask(__name__)
system = initSystem() 

@app.route("/search", methods=["GET", "POST"])
def search():
    if request.method == 'POST':
        form = request.form
        controller.scrapeSites(form.get('location'), form.get('topic'), form.get('limit'))

@app.route("/result", methods=["GET", "POST"])
def result():



if __name__ == "__main__":
  app.run()