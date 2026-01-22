---
title: Building a drum machine in python
date: 2024-07-12
project: "university/retro-reboot"
---

During a university project, I had the task to build a drum machine.
The concept is fairly simple: I have a two-dimensional array of booleans.
I read the columns in the array one by one, with some constant wait time between them.
Each row is mapped to a sample, and when the value is `true`, I play the sample.

# Naive implementation

I took the first best audio library for Python and used it to play a sound file.
The library I chose was `playsound`, and its interface is really simple:

```python
from playsound import playsound

def update(index: int):
    if pattern[index][0]:
        # play the sample corresponding to the row index
        playsound('./snare.wav')
    if pattern[index][1]:
        playsound('./cymbal.wav')
    # repeat for all samples

# simple update loop
index = 0
while True:
    update(index)
    time.sleep(1)
```

The issue is also simple: It was unable to play many files at once, and it was kind of slow.
This is because everytime the function is called, the file is loaded from disk, parsed, and sent to the sound device.
It would be better if we could load the samples once, and then simple play the buffer.

# Second iteration

So I switched libraries and came up with this:

```python
import sounddevice as sd
import soundfile as sf

snare, _ = sf.read('./snare.wav')
cymbal, _ = sf.read('./cymbal.wav')

def update(index: int):
    if pattern[index][0]:
        # play the sample corresponding to the row index
        sd.play(snare)
    if pattern[index][1]:
        sd.play(cymbal)

# ...
```

This was more performant, **but** I still could only play one sound at once.

# Third iteration

So, time to write our own audio buffer containing all the samples that should be played!

```python
import numpy as np

def update(index: int):
    data = np.zeros((samples_per_beat / sample_rate), dtype=np.float64)
    if pattern[index][0]:
        # play the sample corresponding to the row index
        data = normalize(snare + data)
    if pattern[index][1]:
        data = normalize(cymbal + data)
    
    sd.play(data)
```

But we can do better. If we know how our drum pattern looks like from the beginning, we can write the whole buffer
and play it at once!

# Final implementation

```python
buffer = np.zeros((sample_rate * seconds), dtype=np.float64)

for i, column in enumerate(pattern):
    data = np.zeros((samples_per_beat / sample_rate), dtype=np.float64)
    if column[0]:
        # play the sample corresponding to the row index
        data = normalize(snare + data)
    if column[1]:
        data = normalize(cymbal + data)
    
    add_with_wrap(buffer, data, i * sample_rate * seconds)

buffer = normalize(buffer)
sd.play(buffer, loop=true)
```
