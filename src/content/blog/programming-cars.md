---
title: Programming cars
date: 2023-07-03
project: "work/future-mobility"
---

I naively thought that simulating a car was quite simple: define a curve, make it follow that curve, and rotate it a
bit.
Turns out, it's a bit more complex.

# Rotation

When you rotate an object in Unity, you turn it around the center of the object.
Cars don't do that, as their back wheels can't turn.

Instead, the rotation origin is at the center of the front wheel axis.
That's easily fixed, but there is something more, and quite important, that I forgot about.

# Wheels roll when the car moves

Yes, that's correct. Wheel's turn, and in Unity they don't do that automatically when you move the car.
So, how does that work exactly? What's the math behind it?

We can modify the rotation of a wheel by settings its orientation on every update. Great!
Now we need to figure out by what angle the wheel rolled.

We can calculate the distance by which the car moved by subtracting the current position from the previous position.
This distance can be mapped on the circumference of the wheel.
Now we can calculate the angle between the start and end point of the wheel, and add that to the wheels' current
orientation.

The update loop would look something like this:

```c#
// store prevPosition and circumference somewhere

private void Update() 
{
    var positionDelta = transform.position - prevPosition;
    var travelDistance = positionDelta.magnitude;
    var angle = travelDistance / circumference * 360f;
    newRollingAngle = Quaternion.AngleAxis(angle, Vector3.right);
}
```

This works until the car moves backwards. Or until you are in a curve.

# Wheels turn in curves

Yes, we also need to account for that.
My first implementation calculated the rotation of the wheel like that:

```c#
var wheelRotation = Mathf.Atan2(positionDelta.x, positionDelta.z) * 180f / Mathf.PI;
```

This had some weird behavior, so I limited the angle to values between `90` and `-90` degrees and
only changed the angle when the car moved. What was also annoying is that by rolling the wheel as explained previously,
we also rotate the up-axis of the wheel.

Then some colleague told me about a nice function provided by Unity that does exactly what I need:

```c#
angle.SetLookRotation(position, Vector3.up)
```

And just like that, everything worked. Except that the wheels are sometimes flipped 180°. To this day, I have no idea
how.
I imagine that the rotation axes are messed up, but I don't know.

# The wheel collider

Yes, I know that Unity has a wheel collider. However, I couldn't really use that since my cars are following a curve.
They are not controlled by forces.
