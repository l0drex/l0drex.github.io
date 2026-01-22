---
title: Creating a 3D image in GIMP
date: 2023-10-30
---

There are multiple types 3D glasses, this is for colored glasses that filter the image by wavelength for each eye.
This guide works more or less for every photo imaging software with layers and color channels.
I am using GIMP v2.10.36, but it works as well for Krita.

# Creating the image

Next to the layers tab, there is a tab for colors. We can select, delete and move stuff inside the channels without
affecting other channels. Lets use that!

1. Go to the channels tab and click on red. This will disable the red channel from editing
2. Use the select tool to select the left part of the image. Click delete to remove that part of the image. This will
   delete it only in the green and blue channels, so you should see it red only.
3. Click on red to enable again, then on green and blue to deselect them from editing.
4. Select and remove the right part of the image, it should turn cyan.
5. Duplicate the current layer. Change the composition type to addition.
6. Move the layers on top of another, move them a bit until the effect looks promising.

Now you have a 3D image! You can crop it with tools on the left and finally export it with the top menu bar.
