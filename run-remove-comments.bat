@echo off
echo Removing comments from code files...
powershell -ExecutionPolicy Bypass -File "%~dp0remove-comments.ps1"
echo Done!
pause 