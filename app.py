from flask import Flask, flash, render_template
from flask_cors import CORS
import os
from functools import wraps
from flask import g, request, redirect, url_for
from werkzeug.utils import secure_filename
import json

template_dir = os.path.abspath('./')
print template_dir

UPLOAD_FOLDER = 'c:/temp'
ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])
app = Flask(__name__, template_folder=template_dir, static_url_path='')
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
CORS(app)

@app.route('/uploader', methods = ['POST'])
def upload_file():
    if request.method == 'POST':
        print request.files
        file = request.files['file']
        print file
        # check if the post request has the file part
        if 'file' in request.files:
          return json.dumps({'success':False,'error':'No file part'}), 400, {'ContentType':'application/json'}
        file = request.files['file']
        # if user does not select file, browser also
        # submit an empty part without filename
        if file.filename == '':
          flash('')
          return json.dumps({'success':False,'error':'No selected file'}), 400, {'ContentType':'application/json'}
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        return json.dumps({'success':True}), 200, {'ContentType':'application/json'}

@app.route('/sdf')
def hello():
    return "Hello World!"

def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if False:
            return redirect(url_for('login', next=hello))
        return f(*args, **kwargs)
    return decorated_function

@app.route('/login')
def render2():
    return render_template('login.html')


@app.route('/')
@login_required
def render():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)


