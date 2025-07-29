@echo off

REM Get the directory of the current batch file
set "script_dir=%~dp0"

REM Change to the Git repository directory
cd /d "%script_dir%"

echo Checking for changes in Git repository...

REM Add all changes
git add .
if %errorlevel% neq 0 (
    echo Error: Failed to add files.
    goto :eof
)
echo All changes staged.

REM Prompt for a commit message
set /p commit_message="Enter commit message: "

REM Commit changes
git commit -m "%commit_message%"
if %errorlevel% neq 0 (
    echo Error: Failed to commit changes.
    goto :eof
)
echo Changes committed.

REM Push changes to remote repository
git push origin main
if %errorlevel% neq 0 (
    echo Error: Failed to push changes.
    goto :eof
)
echo Code pushed successfully! 🚀
pause
