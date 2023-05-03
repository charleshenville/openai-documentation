from flask import Flask, request, jsonify
import requests
import base64 

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def hello_world():
    if request.method == 'POST':
        return 'Hello, World! (POST)'
    else:
        return 'Hello, World! (GET)'

@app.route('/repositories')
def get_repositories():
    # Set up the GitHub API endpoint and headers
    # url = 'https://api.github.com/user/repos'


    # url = 'https://api.github.com/repos/charleshenville/openai-documentation/contents/src/App.js'

    url_base = "https://api.github.com/repos/charleshenville/"
    
    repo = request.args.get('repo')

    if repo == None:
        return "No contents"

    url = url_base + repo
    headers = {'Authorization': 'token XXXX'}

    # Send a GET request to the GitHub API
    response = requests.get(url, headers=headers)


    # Get the content of the file    
    content = response.json()['content']

    # Decode the content from Base64 encoding to plain text
    # decoded_content = content.decode('base64')

    decoded_content = base64.b64decode(content).decode('utf-8')


    # Print the content of the file
    print(decoded_content)

    # Convert the response to JSON and return it
    repositories = response.json()


    # return jsonify(repositories)
    return decoded_content

if __name__ == '__main__':
    app.run()
