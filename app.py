from flask import Flask, request, jsonify
import requests
import base64 
import openai


app = Flask(__name__)
openai.api_key = "XXX"


@app.route('/file')
def get_repositories():
    # Set up the GitHub API endpoint and headers
    # url = 'https://api.github.com/user/repos'


    # url = 'https://api.github.com/repos/charleshenville/openai-documentation/contents/src/App.js'

    url_base = "https://api.github.com/repos/charleshenville/"
    
    repo = request.args.get('repo')

    if repo == None:
        return "No contents"

    url = url_base + repo
    headers = {'Authorization': 'token XXX'}

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

    # generate_response(decoded_content)

    # return jsonify(repositories)
    return generate_response(decoded_content)

def generate_response(input_text):

    response = openai.Completion.create(
        engine="davinci",
        prompt=input_text,
        temperature=0.5,
        max_tokens=1024,
        n=1,
        stop=None,
        timeout=10
    )
    
    # extract the response text from the API response
    message = response.choices[0].text.strip()
    
    # return the response as JSON
    return jsonify({'message': message})


if __name__ == '__main__':
    app.run()
