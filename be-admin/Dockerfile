FROM python:3.8.13

# Prevents Python from writing pyc files to disc
ENV PYTHONDONTWRITEBYTECODE 1

# Prevents Python from buffering stdout and stderr
ENV PYTHONUNBUFFERED 1

# install psycopg2 dependencies
#RUN apk update \
#    && apk add postgresql-dev gcc python3-dev musl-dev

RUN mkdir /code
COPY . /code/
WORKDIR /code  
  
# COPY requirements.txt /code/
# RUN pip install -r requirements.txt
