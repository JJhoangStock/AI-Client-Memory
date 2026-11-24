@echo off
cd /d "%~dp0"
where py >nul 2>&1
if errorlevel 1 goto python
start "" http://localhost:8765
py -m http.server 8765 --bind 127.0.0.1
pause
exit /b
:python
where python >nul 2>&1
if errorlevel 1 (echo Install Python from python.org first.& pause & exit /b)
start "" http://localhost:8765
python -m http.server 8765 --bind 127.0.0.1
pause
