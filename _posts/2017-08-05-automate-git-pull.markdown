---
layout: post
category: Blog
title: Programmatically Check for Updates in GitHub Repos
description: I wrote a script to automatically check for updates in GA repos, for example, solution code posted.
---
During the Data Science Immersive (DSI) program in General Assembly (Washington, DC), we usually have a GitHub Enterprise repo for each lecture, which we are asked to fork and clone to our own computers.
Periodically, the instructors would post updates after we clone a repo, such as solution code for labs, or updated code-alongs after lectures.
Checking for these updates can be tedious, especially when we don't know exactly when a certain repo would be updated (and it doesn't help my OCD).
So I wrote a script to automate that.
I've tested and debugged the script pretty extensively during the DSI program.
Unfortunately, by the time I have worked out all the kinks, the repos aren't updated that much anymore.
But I hope this will help future cohorts.
(Script is shown at the end.)

### Flow Chart
To better explain the logic flow of my script, I have made a flow chart:

![flow chart](activity_diagram.png)

### Usage Notes
- You can either use an IDE (e.g. [Spyder](https://pythonhosted.org/spyder/installation.html){:target="_blank"}, [PyCharm](https://www.jetbrains.com/pycharm/){:target="_blank"}) to run the script, or run `python <path to script>` in a terminal.
- I've only tested the script with Python 3, and some of the functions I use from the  [`subprocess`](https://docs.python.org/3/library/subprocess.html){:target="_blank"} library may be new in Python 3, so it may or may not be Python 2 compatible. If you're using Python 2 (_but why?_), test it out. If you run into errors, create a virtual environment that runs Python 3 following [these instructions](https://conda.io/docs/user-guide/tasks/manage-python.html#installing-a-different-version-of-python){:target="_blank"}.
- You __MUST__ fill in a few variables in the script. They are in lines 6 through 23 in the code below; I have written instructions and given examples in the comments. When you fill in the GitHub repo patterns, use the SSH (beginning with `git@...`), __not__ HTTPS (beginning with `https://...`). This way, you won't be prompted for username and password every time (which my script isn't able to handle).
- You may notice that in the script, I first define a `main` function (lines 26-55) and then use a conditional to call it at the end (lines 120-121). This is a common format of a Python script. It ensures the `main` function will only be called when the script is directly run (vs. importing the functions in it by `import auto_git_pull`). Read more [here](https://stackoverflow.com/questions/419163/what-does-if-name-main-do){:target="_blank"}.


### Troubleshooting
You may receive certain error messages.
Here are some ways to troubleshoot:
- "Error occurred during merge."
  - This usually means there were conflicts when git was trying to merge your local branch with the remote branch.
In a terminal, `cd` into the directory where the error occurred.
Then enter `git status`; it would tell you what the conflicts are, and give you instructions.
Follow these instructions; you'd need to manually solve the conflicts and continue with the merge.
Anytime you're not sure how to proceed, run `git status` again and see what it says.
- "... does not have remote upstream."
  - This means the repo is a public GitHub repo (non-Enterprise) and it doesn't have a remote upstream. If you forked this repo from someone else, go back to the original repo from which you forked, and copy the "Clone or download" path (again, choose SSH, __not__ HTTPS). Then, in a terminal, `cd` into the repo, and enter `git remote add upstream <copied path>`.

If you run into errors not described above, feel free to [shoot me a message](https://docs.google.com/forms/d/e/1FAIpQLSeORqtyVnOE6XKKdiSApBe_hCAolf8a539jcJwBm98uy1fnDA/viewform?usp=sf_link){:target="_blank"}.

I'll describe how to set up a cronjob to run the script periodically in [another blog post]({{ site.baseurl }}{% link _posts/2017-08-12-cronjob.markdown %}). Stay tuned!

---

### Code

<script src="https://gist.github.com/Ailuropoda1864/347cc3f19837fec8edfa63f8108b2017.js"></script>
