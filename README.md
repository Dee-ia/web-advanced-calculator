# Advanced Calculator
An advanced calculator built with Django. Still in development though!

## Setup

### STEP 1: Clone the repository:

**Linux/Mac**
```sh
$ git clone https://github.com/IfeOlulesi/web-advanced-calculator.git
```

**Windows(CMD)**
```sh
> git clone https://github.com/IfeOlulesi/web-advanced-calculator.git
```

### STEP 2: (Optional but Highly Recommended) Create a virtual environment to install dependencies in and activate it:

**Linux/Mac**
```sh
$ virtualenv2 --no-site-packages env
$ source env/bin/activate
```

**Windows(CMD)**
```sh
> virtualenv env
> env\Scripts\activate.bat
```

### STEP 3: Install the dependencies:

**Linux/Mac**
```sh
$ pip install -r requirements.txt
```

**Windows(CMD)**
```sh
> pip install -r requirements.txt
```

If you followed STEP 2, you should see an `(env)` in front of the prompt. This indicates that this terminal
session operates in a virtual environment set up by `virtualenv2`/ `venv`.

STEP 4: Once `pip` has finished downloading the dependencies, run the following in your terminal:

**Linux/Mac**
```sh
$ python manage.py runserver
```

**Windows(CMD)**
```sh
> py manage.py runserver
```
And navigate to `http://127.0.0.1:8000/calc`
