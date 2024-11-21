

from fastapi import FastAPI,Path
from typing import Optional
app = FastAPI()


students={
    1:{
        "name":"John",
        "age":17,
        "class":"year 12"
    },
    2:
    {
        "name":"Doe",
        "age":18,
        "class":"year 13"
    },
    3:{
        "name":"Jane",
        "age":19,
        "class":"year 14"
    }
}
# this is the data that we are going to use in the api in json format

@app.get("/")
def root():
    return {"message":"Hello World"}

@app.get("/students")
def get_students():
    return students

@app.get("/get-student_id/{student_id}")
def get_student(student_id:int =Path(None,description="The ID of the student you want to view",gt=0,lt=4)):
    # return students[student_id]  
    # could add try catch block 
    # to add desription 
    # could add gt and lt for them

    try:
        return students[student_id]
    except KeyError:
        return {"error":"Student not found the range is 1-3"}
# this is the endpoint to get the student data based on the student_id

# so there is the field for the student_id and the data is going to be returned based on the student_id 

@app.get("/get-by-name")
def get_student(name:str):
    for(student_id,student) in students.items():
        if student["name"]==name:
            return student
        else:
            return {"Data":"Not Found"}
# //could make it optionsla by importaing query

# from typing import Optional
# def get_student(*,name:str,age:Optional[int]=None):

@app.get("/get-by-id-name-age/{student_id}")
def get_student_class(*,student_id:int,name:str,age:Optional[int]=None):
    for student_id in students:
        if students[student_id]["name"]==name and students[student_id]["age"]==age:
            return students[student_id] 

    # return students[student_id]

    
    #  return students[student_id]/
