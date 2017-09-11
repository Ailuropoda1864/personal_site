---
layout: post
category: Blog
title: Programatically Check for Updates in GitHub Repos
description: I wrote a script to automatically check for updates in GA repos, for example, solution code posted.
---
During the Data Science Immersive (DSI) program in General Assembly (Washington, DC), we usually have a GitHub Enterprise repo for each lecture, which we are asked to fork and clone to our own computers.
Periodically, the instructors would post updates after we clone a repo, such as solution code for labs, or updated code-alongs after a lecture.
Checking for these updates can be tediously, especially when we don't know exactly when a certain repo has been updated (and it doesn't help my OCD).
So I wrote a script to automate that.
I've tested and debugged the script pretty extensively during the DSI program.
Unfortunately, by the time I have worked out all the kinks, the repos aren't updated that much anymore.
But I hope this will help future cohorts.

A couple caveats:
- I've only tested the script with Python 3, and some of the functions I use from the  [`subprocess`](https://docs.python.org/3/library/subprocess.html){:target="_blank"} library may be new in Python 3, so it may or may not be Python 2 compatible. If you're using Python 2 (_but why?_), test it out. If you run into errors, create a virtual environment that runs Python 3 following [these instructions](https://conda.io/docs/user-guide/tasks/manage-python.html#installing-a-different-version-of-python){:target="_blank"}.
- You __MUST__ fill in a few variables in the script. (Read my comments! I don't usually comment; but when I do, it's important.) When you fill in the GitHub repo patterns, use the SSH (beginning with `git@...`), __not__ HTTPS (beginning with `https://...`). This way, you won't be prompted for username and password every time (which my script isn't able to handle).

And here is the script:

<script src="https://gist.github.com/Ailuropoda1864/347cc3f19837fec8edfa63f8108b2017.js"></script>

Note the format of defining a `main` function and then using a conditional to call it at the end.
This is a common format of a Python script.
It ensures the `main` function will only be called when the script is directly run (vs. importing the functions in it by `import auto_git_pull`).
Read more [here](https://stackoverflow.com/questions/419163/what-does-if-name-main-do){:target="_blank"}.

You can either use an IDE to run the script, or run `python <path to script>` in a terminal.
I'll describe how to set up a cronjob to run the script periodically in [another blog post]({{ site.baseurl }}{% link _posts/2017-08-12-cronjob.markdown %}). Stay tuned!