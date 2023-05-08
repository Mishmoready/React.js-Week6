## Git Commands as at Week 2

### <span style="color: purple; background-color:white;">First time Git setup</span>

Checking the git version installed

```
git --version
```

Setting up the username and email

```
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

### <span style="color: purple; background-color:white;">Initialize an empty local Git repository</span>

```
git init
```

### <span style="color: purple; background-color:white;">Adding and Committing files to Git</span>

1. Adding a single file

```
git add index.html
```

1. Adding multiple files (separate each filename by a space)

```
git add index.html style.css
```

1. To add all new files in one go (simplist but not always recommended)

```
git add .
```

2. Making a git commit

```
git commit -m "commit message"
```

3. Push your changes to GitHub

```
git push
```

### <span style="color: purple; background-color:white;">Connecting your existing local repo with GitHub</span>

1. Add remote repo URL

```
git remote add origin REPLACE_WITH_YOUR_GIT_REPO_URL
```

2. Push the commits (so make sure you have some commit(s)) in the current branch of your repository to the main branch of the remote called origin.

```
git push –u origin main
```

### <span style="color: purple; background-color:white;">Pull the latest code from the remote repo</span>

Pull data from the remote repo when collaborating with a team OR if you make changes to your code via the GitHub website

```
git pull
```

### <span style="color: purple; background-color:white;">Create a clone (or copy) of a remote repository (copying someone else's repo to your computer)</span>

1. Create a new Repo on GitHub.com and copy the repo’s URL. Then in your terminal, in the directory you want to clone your repo to, type:

```
git clone REPLACE_WITH_YOUR_GIT_REPO_URL
```

2. Change Directory into your cloned repo folder.

```
cd YOUR_REPO_NAME
```

3. Create a new file (e.g. hello.html) inside your cloned repo folder in VSC, then

```
[add and commit your files as per usual]
```

4. Push your changes to GitHub

```
git push
```

### <span style="color: purple; background-color:white;">Viewing the Git history and other </span>

Default git log

```
git log
```

Less detailed version of the log

```
git log --oneline
```

More detailed version of the log

```
git log -p
```

Displays the state of the working directory and the staging area

```
git status
```

Git Cheat Sheet: https://education.github.com/git-cheat-sheet-education.pdf