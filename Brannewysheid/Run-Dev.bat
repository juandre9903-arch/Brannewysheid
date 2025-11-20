@echo off
title Brannewysheid Dev Server

echo ==============================================
echo  🚀 Launching Brannewysheid Website (Dev Mode)
echo ==============================================
echo.

REM Change to the folder where this .bat file is located
cd /d "%~dp0"

REM Show where we are (for debugging)
echo Current folder:
echo   %cd%
echo.

REM Optional: open the site in your browser
start "" "http://localhost:5173/"

REM Start Vite dev server
start "Vite Dev Server" cmd /k "npm run dev"

