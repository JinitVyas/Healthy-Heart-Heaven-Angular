import numpy as np
import pandas as pd
import sklearn
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score


# df =  pd.read_csv('../Heart Disease data.csv')
df = pd.read_csv('data/HeartDiseasedata.csv')

last_row = df.iloc[-1]
df = df.iloc[:-1]
x = df[df.columns[:-1]]
y = df[df.columns[-1]]
print(last_row.shape)
print(df.shape)

last_t = last_row.iloc[-1]
last_row = last_row.iloc[:-1]
print("***********\n",last_row,"***********\n")
print("***********\n",last_row.shape,"***********\n")
print("***********\n",last_t,"***********\n")

last_row = pd.DataFrame(np.array(last_row).reshape(1, -1))
last_t = pd.Series(last_t)
last_t

input_train, input_test, output_train, output_test = train_test_split(x, y, test_size = 0.20, random_state = 100)
clf = DecisionTreeClassifier()

print("fitting Data...")
clf.fit(input_train, output_train)
print("fitting complete")

print("predicting test data...")
prediction = clf.predict(input_test)
print("prediction for test data complete")

print("counting accuracy for test data...")
accurate = accuracy_score(output_test, prediction)
print("accuracy of test data: ", accurate)

# print("predicting user value...")
# prediction = clf.predict(last_row)
# print("prediction for user value complete")

# print("last row counting accuracy...")
# accurate = accuracy_score(last_t, prediction)
# print("last row accuracy: ", accurate)