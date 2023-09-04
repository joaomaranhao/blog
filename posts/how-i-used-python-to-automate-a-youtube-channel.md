---
title: How I Used Python to Automate a Youtube Channel
date: 2023-09-04
description: The idea was to create a YouTube channel with replays of matches of a very popular game called “League of Legends”, fully automated.
tags: "#python #youtube #automation"
---

When I started coding, the first thing I did to put my new knowledge into practice was to automate a process that was done every day at my job.

I worked with video editing and, at least once a day, I had to download a media with the recordings to a backup server and then pull them to my machine to start editing. So, I decided to create a script that would do this.

## Why automate?

By automating everyday processes, it was as if I was “gaining” time. If a daily task that takes 5 minutes to do is automated, in 5 business days, you will have 25 minutes more to do something else. In a month, 1 hour and 40 minutes; in a year, 20 hours…Multiply that by more tasks or users and you have considerable numbers.

## How did the inspiration come about?

Studying JavaScript, I watched a series of videos from [Fillipe Deschamps](https://www.youtube.com/watch?v=kjhu1LEmRpY&list=PLMdYygf53DP4YTVeu0JxVnWq01uXrLwHi&ab_channel=FilipeDeschamps), where he teaches how to create a YouTube channel that generates content programmatically.

In short, he accesses a Wikipedia article to get the information that will be used in the video; uses IBM's Watson artificial intelligence to “break” text into sentences; the Google API to fetch images to illustrate the video; ImageMagick to process the photos and create the thumbnail; Adobe After Effects to edit the video, and finally the Youtube API to upload.

I followed the series and made this project. In the end, I added some extra functionality like generating audio for each sentence with the Text-to-Speech API, also from IBM's Watson, and adding them to the video.

## What is the project

The idea was to create a YouTube channel with replays of matches of a very popular game called “League of Legends”, fully automated.

Some sites make matches of professional players available for download. Replays are executable files that run the game.

To automate the entire creation process, a few steps were necessary:

- Enter the website, choose a match, get the match information and download the replay
- Run replay and record screen
- Edit the video
- Create the thumbnail
- Upload the video and thumbnail to Youtube and fill in information like title, description, and keywords

## Why Python?

As I was more familiar with Javascript having already used it in other projects, it would be the obvious choice, but I had a problem, I needed to run the game and configure some things when the game started. For that, I needed to control the mouse and keyboard programmatically.

I looked for some Javascript library that would help me to do this, but I was not successful. That's when I remembered one in Python, which is called PyAutoGUI. So, I decided to do everything in Python! In addition to having everything I needed, it was a chance to perfect myself in another language.

## How it was implemented

### Web scrapping

Web scraping is a method of accessing any website and getting information.

What I used to search for matches was [League of Graphs](https://www.leagueofgraphs.com/) and, through [this link](https://www.leagueofgraphs.com/replays/with-high- kda/grandmaster/sr-ranked), I can access a page with replays and filter my search, to get only matches with good players.

The idea here was to take the first game and extract the information from this table.

![https://raw.githubusercontent.com/joaomaranhao/video-maker/main/docs/images/match.png](https://raw.githubusercontent.com/joaomaranhao/video-maker/main/docs/images/match.png)

Among the many Python options to accomplish this task, I chose Selenium because it has the functionality to interact with the site. The library lets you click to download the game.

I created a Python dictionary with all the information I needed and saved it in a JSON file, in a folder called “assets”, at the root of the project.

### Thumbnail

To create the thumbnail, I developed a template with HTML and CSS. With the JSON information, the data is dynamically filled and an HTML file is saved in the “assets” folder:

```python
./assets
match_data.json
thumbnail.html
```

After that, I use Selenium again to access that HTML and take a screenshot of the page. The image is saved in png in a folder in my local directory.

The result is this:

![https://raw.githubusercontent.com/joaomaranhao/video-maker/main/docs/images/thumb.png](https://raw.githubusercontent.com/joaomaranhao/video-maker/main/docs/images/thumb.png)

### Recording

To simplify the creation of the video, I decided to record the game with OBS Studio. So I can add on-screen elements, which are superimposed at the start, without the need to edit or post-produce the video.

With Python's _subprocess_ module, I run the _.bat_ file that opens the replay of the match.

PyAutoGUI is used to open OBS Studio and put the match to record.

When the game is over, recording stops, and a _.mp4_ video file is saved to my local disk, ready to use.

### Upload to Youtube

I created a project on [Google Cloud Platform](https://cloud.google.com/), to be able to use the [Youtube API](https://developers.google.com/youtube/v3/quickstart/python).

With the JSON information, I make a request with the title, description, keywords, and the video file.

When the video upload finishes, I make another request to add the thumbnail to the video.

## Conclusion

This project allowed me to use different technologies and methods to programmatically create content. With all the automated processes, just run a line of code to populate this channel with a new, updated video with thumbnail and custom information.

You can check the channel [here](https://www.youtube.com/channel/UC-C_dsVX2-G2UYA9IoD5i3Q).

You can check the code on my [Github](https://github.com/joaomaranhao/video-maker).

Follow me on [Twitter](https://twitter.com/joaofmaranhao)!

Feel free to ask questions, make suggestions and contribute to the project.
