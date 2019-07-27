from flask import *
from flask_cors import CORS
from server import controller
import json
import os

app = Flask(__name__)
CORS(app)

@app.route("/search", methods=["GET", "POST"])
def search():
    if request.method == 'POST':
        form = request.form
        controller.scrapeSites(form.get('location'), form.get('topic'), form.get('limit'))


if __name__ == "__main__":
  app.run()