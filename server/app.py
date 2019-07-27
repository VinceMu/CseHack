from flask import *
import controller
import json

app = Flask(__name__)
system = initSystem() 

@app.route("/search", methods=["GET", "POST"])
def search():
    if request.method == 'POST':
        controller.scrapeSites(parameters)

@app.route("/result", methods=["GET", "POST"])
def result():



if __name__ == "__main__":
  app.run()