from flask import Flask, request, jsonify
from flask_cors import CORS

import numpy as np
import pandas as pd
import sklearn
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score

app = Flask(__name__)
# CORS(app)
CORS(app, origins=['http://localhost:4200']) 

# data = request.get_json()
# print(data)


df = pd.read_csv('../data/HeartDiseasedata.csv')

# last_row = df.iloc[-1]
# df = df.iloc[:-1]

x = df[df.columns[:-1]]
y = df[df.columns[-1]]

# last_t = last_row.iloc[-1]
# last_row = last_row.iloc[:-1]
# print("***********\n",last_row,"***********\n")
# print("***********\n",last_row.shape,"***********\n")
# print("***********\n",last_t,"***********\n")

# last_row = pd.DataFrame(np.array(last_row).reshape(1, -1))
# last_t = pd.Series(last_t)
# last_t

input_train, input_test, output_train, output_test = train_test_split(x, y, test_size = 0.20, random_state = 100)
clf = DecisionTreeClassifier()

clf.fit(input_train, output_train)
prediction = clf.predict(input_test)
accurate = accuracy_score(output_test, prediction)

# prediction = clf.predict(last_row)
# accurate = accuracy_score(last_t, prediction)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()  # Assumes JSON-formatted data

    if len(data) != 10:
        return jsonify({'error': 'Invalid data format: expected an array of 10 numbers'}), 400

    processed_data = np.array(data).reshape(1, -1)  # Example: simply returning the data unchanged

    prediction = clf.predict(processed_data)
    response = jsonify({'prediction': prediction[0]})  # Access the single predicted value
    response.headers['Content-Type'] = 'application/json'

    # Set the Content-Type header to ensure Angular interprets it as JSON
    print(type(response))
    # return response

    # Prepare the response data in a suitable format for Angular
    # response = {
    #     'processed_data': processed_data,
        # Add other relevant information as needed (e.g., prediction results)
    # }

    return jsonify(response)
