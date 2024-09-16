# Learning HTML
## 1. Basic concepts
* HTML stands for Hyper Text Markup Language
* ``<html>Hello</html>``
* There are 2 big parts:
```HTML
<html>
    <head>
        1. Head
    </head>
    <body>
        2. Body
    </body>
</html>
```

* You can use [W3C](https://validator.w3.org/#validate_by_upload "W3C validation page"), to check your HTML code.

* Meta data is represented like this ``<meta>`` and this type of data adds information about your document

### Some things that are indispensable

* At the beggining of the html document:
    ``` HTML
    <!DOCTYPE html>
    <html lang="en">
    ```
    *lang stands for language*

* Meta data:

``` HTML
  <head>
    <meta charset="UTF-8" />
    <meta name="author" content="Olivier Paspuel" />
    <meta name="description" content="This web page contains everything I'm learning about HTML."/>
    <title>My first web page</title>
    <link rel="icon" href="bienes-raices.png" type="image/x-icon" />
    <link rel="stylesheet" href="main.css" type="text/css" />
  </head> 
```

