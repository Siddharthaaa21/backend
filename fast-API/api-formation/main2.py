

from fastapi import FastAPI,Path

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



