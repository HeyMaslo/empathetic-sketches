# Emotional Programming
These sketches give you ideas on how to use aspects of COMPUTER VISION, FACIAL RECOGNITION, SENTIMENT ANALYSIS and SYMBOLIC PROGRAMMING to create a new way to construct informal and formal programs.


![alt text](https://github.com/HeyMaslo/empathetic-sketches/tree/master/emotionprogramming/facecompute.png "Sample Face Programming")


## Expressive Language
The primary programming language interface can be anything.  All programming is some way of communicating ideas from humans to computers or other computers to computers or computers to humans.

In this example we're using the human face as the interface for communicating ideas to the computer.

The computer in turn converts the facial expressions into more formalized WolframLanguage programs.

## Simple Seed to More Complex Compositions
The sketch is very simple in that it simple detects 7 emotions in faces and then replaces that emotion with a code representing a valid WolframLanguage program.   In turn a sequence of faces will compose a longer program.  Re-ordering the sequence will give different longer programs.

## Expanding the Capability
One can see fairly straightforwardly how to advance the interface and the vocabulary.

  * Measure the duration and intensity of the facial expressions to create different inputs for program snippets - for example a longer held facial expression could indicate wanting a longer running piece of code or a more complex line of code.
  * Allow for program code to vary by the functions accessed and the data serving as input
  * Consider chained expressions (sequences) as indicating using the output of one programmed function as the input for the next
  * allow for indications of chaining or transitions with headnods or other human gestures

What else should be done?

## Technology Used

  * WolframLanguage
  * Mathematica 11.3, but you can use Mathematica Online etc
  * Nothing about this is particular to WolframLang is just very easy to express it all in WolframLang
  * Could easily use OpenCV (mathematica/wolframlang is just wrapping that!) + some other trained machine learning and javascript to marshal expressions/data around
