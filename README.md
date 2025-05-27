# Title of Project: Suspicious Activity Recognition from a Live Video Using Deep Learning

## Team Members:
1. Rishabh Kumar Panthri
2. Mohan Paliwal
3. Abhigyan Tomar

   
## Steps for Execution:
Step 1.)

Preprocessing file contains the preprocessing done on the frames acquired from UCF101 on kaggle
    Seperate folder were formed in the working directory 

Working directory/
├── ApplyEyeMakeup/
│   ├── v_ApplyEyeMakeup_g01_c01.avi----(contains respective extracted frames)
│   ├── v_ApplyEyeMakeup_g01_c02.avi----(contains respective extracted frames)
│   └── ...
├── ApplyLipstick/
│   ├── v_ApplyLipstick_g01_c01.avi----(contains respective extracted frames)
│   ├── v_ApplyLipstick_g01_c02.avi----(contains respective extracted frames)
│   └── ...
├── Archery/
│   ├── v_Archery_g01_c01.avi----(contains respective extracted frames)
│   └── ...
├── BabyCrawling/
│   ├── v_BabyCrawling_g01_c01.avi----(contains respective extracted frames)
│   └── ...
├── ...
└── YoYo/
    ├── v_YoYo_g01_c01.avi----(contains respective extracted frames)
    ├── v_YoYo_g01_c02.avi----(contains respective extracted frames)
    └── ...


All these extracted frames activities were comnbined to form a folder called ucf101extracted and similarly for ucf101extractedtest

Step 2.)Using YOLOV8
After the preprocessing is done ,the frames in the ucf101extracted and ucf101extractedtest were extracted to crop the subject of interest and 
form similar directory structure again. The root directories were named yoloed for train data and yoloedtest for test data.

Step 3.) Using ResNet34
Now when the data is obtained for the purpose of feature extraction, the Frame Dataset class is formed to form a dataset for Resnet and data loaders 
were prepared for training and testing.
With each epoch the better model was saved into the database.

Step 4.) Using Transformer Encoder
VideoFrameDataset class is formed to form dataset for the transformer by arraning the video frames in sequence and labelling them.
Integration of Resnet34 is done with Transformer Encoder.
With each epoch the better model was saved into the database.

All above source code is present in SourceCode directory

## Checklist:
1. Final Project Report
2. Certificate VII Semester (Dated: December 2024).
3. Certificate VIII Semester (Dated: May 2025).
4. Synopsis
5. Final Presentation
6. Source Code
7. Database dump (.sql file)
8. If a web project, then a Docker file for deployment
9. README (This file)
