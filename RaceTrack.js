/**************************************************************************************************\
*
* vim: ts=3 sw=3 et wrap co=100 go-=b
*
* Filename: "RaceTrack.js"
*
* Project: Racing.
*
* Purpose: Definition of the RaceTrack object.
*
* Author: Tom McDonnell 2007.
*
\**************************************************************************************************/

// Functions. //////////////////////////////////////////////////////////////////////////////////////

/*
 *
 */
function RaceTrack(canvasIdAttr, sidePanelIdAttr)
{
   var f = 'RaceTrack()';
   UTILS.checkArgs(f, arguments, ['string', 'string']);

   // Public functions. /////////////////////////////////////////////////////////////////////////

   // Getters. --------------------------------------------------------------------------------//

   this.getAtmosphericDragCoefficient = function () {return atmosphericDragCoefficient;};

   // Other public functions. -----------------------------------------------------------------//

   /*
    * Convert window coordinates to those used inside the raceTrack.
    * Any coordinates supplied to member functions of RaceTrack() must be raceTrack coordinates.
    *
    * Definitions:
    *
    * Window coordinates:
    *   The normal coordinates used inside the browser window.
    *   MouseEvents supply these coordinates.
    *   Eg. (x: 0                , y: 0                 ) is top    left  corner,
    *       (x: window.innerWidth, y: window.innerHeight) is bottom right corner.
    *
    * Track coordinates definition:
    *   The coordinates used inside the raceTrack.
    *   Eg. (x: 0             , y: 0              ) is top    left  corner,
    *       (x: TRACK_WIDTH_PX, y: TRACK_HEIGHT_PX) is bottom right corner.
    */
   this.convertCoordinatesWindowToTrack = function (pos)
   {
      //Optimised for speed. var f = 'RaceTrack.convertCoordinatesWindowToTrack()';
      //Optimised for speed. UTILS.checkArgs(f, arguments, ['VectorRec2d']);

      pos.setX((pos.getX() - trackOffsetLeft) / SCALING_FACTOR_X);
      pos.setY((pos.getY() - trackOffsetTop ) / SCALING_FACTOR_Y);
   };

   /*
    * See definitions given in convertCoordinatesWindowToTrack().
    */
   this.convertCoordinatesTrackToWindow = function (pos)
   {
      //Optimised for speed. var f = 'RaceTrack.convertCoordinatesTrackToWindow()';
      //Optimised for speed. UTILS.checkArgs(f, arguments, ['VectorRec2d']);

      pos.setX((pos.getX() * SCALING_FACTOR_X) + trackOffsetLeft);
      pos.setY((pos.getY() * SCALING_FACTOR_Y) + trackOffsetTop );
   };

   /*
    * Update the position of the racer (passed by reference) taking into account collisions
    * with barriers.  Also deal with lap time issues (start timer when cross start/finish line,
    * nullify lap time if cross start/finish line in wrong direction).
    *
    * @param racerPosNew {VectorRec2d}
    *    The new position of the racer not taking into account collisions with barriers.
    */
   this.updateRacerPosition = function (posOld, pos, vel)
   {
      //Optimised for speed. var f = 'RaceTrack.updateRacerPosition()';
      //Optimised for speed. UTILS.checkArgs(f, arguments, ['VectorRec2d', 'VectorRec2d', 'VectorRec2d']);
      if (crashHasOccurred(pos)) {
         // Update lapStatus due to crash.
      }

      var lapStatus = dealWithLapTimeIssues(posOld, pos);

      return lapStatus;
   };

   // Private functions. ////////////////////////////////////////////////////////////////////////

   // Collision functions. --------------------------------------------------------------------//

   /*
    *
    */
   function crashHasOccurred(pos)
   {
      // TODO: Check whether pos is inside a track stadium section.
      //       If so, the racer has crashe and his/her race is over.
   }

   // Timing functions. -----------------------------------------------------------------------//

   /*
    *
    */
   function dealWithLapTimeIssues(posOld, posNew)
   {
      //Optimised for speed. var f = 'Racetrack.dealWithLapTimeIssues()';
      //Optimised for speed. UTILS.checkArgs(f, arguments, ['VectorRec2d', 'VectorRec2d']);

      // Driver has crossed start/finish line in correct direction...
      if (false)
      {
         // Start lap timer.
         return 1;
      }

      // Driver has crossed start/finish line in incorrect direction...
      if (false)
      {
         // Nullify lap time.
         return -1;
      }

      return 0;
   }

   // General purpose functions. --------------------------------------------------------------//

   // Initialisation functions. ---------------------------------------------------------------//

   function _initCanvas(canvasIdAttr)
   {
      const canvas       = document.getElementById(canvasIdAttr);
      const context      = canvas.getContext('2d');
      const image        = new Image();
      const canvasWidth  = Number(canvas.getAttribute('width' ));
      const canvasHeight = Number(canvas.getAttribute('height'));

      if (canvasWidth !== 1000 || canvasHeight !== 1000)
      {
         throw new Exception('Unexpected canvas width and/or height.');
      }

      image.src    = 'images/tracks/suzuka_short_1000x1000.png';
      image.onload = function () {
         context.drawImage(image, 0, 0, canvasWidth, canvasHeight);
      }

      const canvasBoundingRect = canvas.getBoundingClientRect();

      trackOffsetTop  = canvasBoundingRect.top  + window.pageYOffset;
      trackOffsetLeft = canvasBoundingRect.left + window.pageXOffset;
   }

   // Private constants. ////////////////////////////////////////////////////////////////////////

   const canvasWidthPx    = 1000;
   const canvasHeightPx   = 1000;
   const SCALING_FACTOR_X = 1; //canvasWidthPx  / canvasWidthPx;
   const SCALING_FACTOR_Y = 1; //canvasHeightPx / canvasHeightPx;

   // Private variables. ////////////////////////////////////////////////////////////////////////

   // Drag on racer due to atmosphere.
   var atmosphericDragCoefficient = 0;

   // Offsets in pixels.
   // These must be set after the track table has been added to the DOM using this.setOffsets().
   trackOffsetTop  = null;
   trackOffsetLeft = null;

   // Initialisation code. //////////////////////////////////////////////////////////////////////

   _initCanvas(canvasIdAttr, sidePanelIdAttr);
}

/*******************************************END*OF*FILE********************************************/
