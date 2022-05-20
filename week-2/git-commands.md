### First time Git setup

Checking the git version installed

```
git --version
```

Setting up the username and email

```
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

### Initialize an empty local Git repository

```
git init
```

### Adding and Committing files to Git

Adding a single file

```
git add index.html
```

Adding multiple files [separate each filename by a space]

```
git add index.html style.css
```

To add all new files in one go (simplist but not always recommended)

```
git add .
```

Making a git commit

```
git commit -m "commit message"
```

Displays the state of the working directory and the staging area

```
git status
```

### Viewing the Git history

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

### Create a clone, or copy of a remote repository (copying someone ekse's repo to your computer)

Create a new Repo on GitHub.com and copy the repo’s URL. Then in your terminal, in the directory you want to clone your repo to, type:

```
git clone REPLACE_WITH_YOUR_GIT_REPO_URL
```

Change Directory into your cloned repo folder.

```
	cd YOUR_REPO_NAME
```

Create a new file (e.g. hello.html) inside your cloned repo folder in VSC, then run

```
	[add and commit your files]
```

Push your changes to GitHub

```
    git push
```

### Add a remote repository to your local one/Connecting your existing local repo with GitHub.

Add remote repo URL

```
git remote add origin REPLACE_WITH_YOUR_GIT_REPO_URL
```

Push the commits in the current branch of your repository to the main branch of the remote called origin.

```
git push –u origin main
```

### To see all the remotes added to the local git repository

```
git remote -v
```
