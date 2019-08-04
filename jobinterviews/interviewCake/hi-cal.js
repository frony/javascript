'use strict';

/*
You want to add a feature to see the times in a day when everyone is available.

To do this, you’ll need to know when any team is having a meeting.
In HiCal, a meeting is stored as objects ↴ with integer properties startTime and endTime.
These integers represent the number of 30-minute blocks past 9:00am.
*/

const testArray =   [
  { startTime: 0,  endTime: 1 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 },
];

/*
Should return:

  [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 8 },
  { startTime: 9, endTime: 12 },
]

We treat the meeting with earlier start time as "first," and the other as "second."
If the end time of the first meeting is equal to or greater than the start time of
the second meeting, we merge the two meetings into one time range.
The resulting time range's start time is the first meeting's start,
and its end time is the later of the two meetings' end times.
Else, we leave them separate.
*/

function mergeRanges(meetings) {
  // make a copy of the array argument
  const meetingsCopy = meetings.slice();
  // console.log(meetingsCopy);
  // console.log(meetingsCopy === meetings);

  // sort the array by start time
  const sortedMeetings = meetingsCopy.sort((a, b) => a.startTime - b.startTime);
  console.log(sortedMeetings);

  // array to return
  // push the first sorted meeting to the return array
  const mergedMeetings = [sortedMeetings[0]];

  for (let i = 1; i < sortedMeetings.length; i++) {
    // get the current meeting
    let currentMeeting = sortedMeetings[i];

    // get the last merged meeting
    const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];
/*    console.log('------------');
    console.log(currentMeeting);
    console.log(lastMergedMeeting);*/

    // if the current start time is less than the last merged meeting end time
    // then they overlap
    // set the last merged meeting end time to be
    // whatever is the latest end time between the current meeting
    // and the last merged meeting
    if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
      lastMergedMeeting.endTime = Math.max(currentMeeting.endTime, lastMergedMeeting.endTime);
/*      console.log(lastMergedMeeting);
      console.log(mergedMeetings);
      console.log(lastMergedMeeting === mergedMeetings[mergedMeetings.length - 1]);*/
    // otherwise, push the current meeting
    } else {
      console.log('------ pushing ------');
      mergedMeetings.push(currentMeeting);
    }
  }

  return mergedMeetings;
}

console.log(mergeRanges(testArray));