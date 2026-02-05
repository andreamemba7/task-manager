# Task Manager Web Application
## Problem Statement
Many users struggle to manage daily tasks due to complex or account-based task management tools. This project provides a simple, lightweight task manager that runs entirely in the browser.

## Project Idea

A static web-based task management application that allows users to add, view, complete, and delete tasks without requiring a backend server.

## Features
Add new tasks

View list of tasks

Mark tasks as completed

Delete tasks

Persist tasks using browser localStorage

## Technology Stack
HTML – Structure

CSS – Styling and responsiveness

JavaScript – Logic and interaction

GitHub Pages – Static hosting and deployment

## How to Run Locally
Clone the repository

Open index.html in any modern browser

(or use Live Server in VS Code)

## Live Application
https://yourusername.github.io/task-manager/

## Deployment Process (GitHub Pages)
Source code pushed to a public GitHub repository

GitHub Pages enabled from repository settings

GitHub serves static files directly to users via HTTP

## Web Infrastructure Overview
When a user types the website URL:

The browser sends a request over the internet

DNS resolves the domain to GitHub’s server

GitHub Pages serves static HTML, CSS, and JavaScript files

The browser renders the interface and executes JavaScript

User interactions happen entirely in the browser

## Infrastructure Flow Diagram
User → Browser → Internet → GitHub Pages Server → HTML/CSS/JS Files

## Design Choices & Assumptions
No backend server is used
All data is stored locally in the browser
Designed as an early MVP for quick validation
