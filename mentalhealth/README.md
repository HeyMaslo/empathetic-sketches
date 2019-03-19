# Mental Health Diagnostic from A/V Stream
These sketches give you ideas on how to use aspects of COMPUTER VISION, FACIAL RECOGNITION, SENTIMENT ANALYSIS and SYMBOLIC PROGRAMMING to attach to various mental health diagnostics


![alt text](https://github.com/HeyMaslo/empathetic-sketches/blob/master/mentalhealth/example.png?raw=true "Sample Diagnostics for Mental Health")


## Everything is a signal and can be decomposed into small signals
Using modern Machine Learning and Signal Processing we do not need to force users, computers, etc to be formal in expressing themselves.  We can simply let them do whatever however works for them and we can observe, decompose and synthesize.

in this example we take a stream of video, say from a telemedicine conference, and we simple parse the audio, video (images, sound, voices, questions, sentiment, movement, keypoints, etc)

## Changes in signal are what we care about
The signals in isolation are probably not that useful.  What is interesting is noticing changes in behavior in the signals.  To find correlations of when a talk track changes, a voice inflects, a word gets repeated, there is movement by the subjects and so forth.

In this example we do not worry about whether we had the right interview questions or a perfect video feed.  Or even if people are speaking a particular language.  We just parse what we can parse and notice change.

## Expanding the Capability
One can see fairly straightforwardly how to advance the interface and the vocabulary.

  * Measure the duration and intensity of the facial expressions to create different inputs 
  * Convolve aspects of signals to see if the signals are robust underchange
  * Time shift the voice and video to see how robust any correlations are
  * Decompose video stream into color histograms and more
  * Build up several streams of the same subject to do multi-variate analysis over many interview sessions

What else should be done?

## Technology Used

  * WolframLanguage
  * Mathematica 11.3, but you can use Mathematica Online etc
  * Nothing about this is particular to WolframLang is just very easy to express it all in WolframLang
  * Could easily use OpenCV (mathematica/wolframlang is just wrapping that!) + some other trained machine learning and javascript to marshal expressions/data around
