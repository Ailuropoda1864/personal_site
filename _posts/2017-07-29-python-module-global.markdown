---
layout: post
category: Blog
title: A Step-by-Step Guide to Set Up Python Scripts for System-Wide Use
description: How to set up python scripts for system-wide use, i.e., calling a Python script from anywhere on your computer without having to specify the path
---
As you develop more and more Python code for data science tasks, you may find yourself using the same code (functions) over and over again (e.g., a customized [eda function](https://gist.github.com/Ailuropoda1864/5a067b50406534eb25ff268d4232efc8)).
Instead of copying and pasting code snippets to your current Jupyter notebook, there are slicker ways to call Python functions from anywhere on your computer without having to specify the path, which I'll describe in this blog.

__Note:__ Methods described here are applicable to UNIX systems (Mac or Linux).

### My Current Method

#### Step 1
Save the function(s) in a `.py` file.
This can be done using any text editors, such as [Atom](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwihqfHuu5TWAhXKh1QKHWDFDcwQFggoMAA&url=https%3A%2F%2Fatom.io%2F&usg=AFQjCNG9GpArx65u5sF0eKusBOg5u_9dtQ) or [gedit](https://wiki.gnome.org/Apps/Gedit); or IDEs, such as [Spyder](https://pythonhosted.org/spyder/installation.html) or [PyCharm](https://www.jetbrains.com/pycharm/).

#### Step 2
In the terminal, go to your home directory (`cd` and press "enter").

#### Step 3
Run `ls -a` to see all the files in your home directory, including hidden files. There should be a file named `.bashrc`.

#### Step 4
Open it with an text editor of your choosing.
At the end of the document, add the following line:

`export PYTHONPATH="<path to directory containing your Python script>:$PYTHONPATH"`

For example, mine is :

`export PYTHONPATH="/home/fay/code/data_science_general:$PYTHONPATH"`

Putting `:$PYTHONPATH` at the end makes sure that you *append* to `PYTHONPATH`, and not overwrite it.

#### Step 5
For this to take effect, run `source ~/.bashrc` or simply log out and then log in again.

Note: `.bashrc` is read at log-in, that's why you need to `source` it if you don't want to log in again.

#### Step 6
Now, to use the function(s) in your `.py` file(s), simply run `import <script>` in your Jupyter notebook.

For example, I have my functions saved in `eda.py`, all I need to do is to add `import eda` or `from eda import *` to my Jupyter notebook.

### Other Methods
If you are ready to package your script(s) and share it with the world, you can register it with [PyPI](https://pypi.python.org/pypi), which you (or anyone else) can `pip install` in the system (or a virtual environment), and then `import` it like you would any other Python libraries. You can find more details at the resources below:
- [Packaging and Distributing Projects](https://packaging.python.org/tutorials/distributing-packages/)
- [An interactive way to generate all the boilerplate you need for your package](https://github.com/wdm0006/cookiecutter-pipproject)
