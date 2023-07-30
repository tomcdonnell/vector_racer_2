<?php
/**************************************************************************************************\
*
* vim: ts=3 sw=3 et wrap go-=b
*
* Filename: "index.php"
*
* Project: Racing.
*
* Purpose: Start page for project.
*
* Author: Tom McDonnell 2007.
*
\**************************************************************************************************/
?>
<!DOCTYPE html>
<html>
 <head>
  <!-- NOTE: Order important. -->
  <script src='lib/tom/js/physics/Particle.js'></script>
  <script src='lib/tom/js/physics/VectorPol2d.js'></script>
  <script src='lib/tom/js/physics/VectorRec2d.js'></script>
  <script src='lib/tom/js/contrib/DomBuilder.js'></script>
  <script src='lib/tom/js/utils/utils.js'></script>
  <script src='lib/tom/js/utils/utilsValidator.js'></script>
  <script src='lib/tom/js/utils/inheritance.js'></script>
  <script src='RaceTrack.js'></script>
  <script src='Racer.js'></script>
  <script src='RacingGame.js'></script>
  <script src='index.js'></script>
  <link rel='stylesheet' href='style.css'/>
  <title>Vector Racing 2</title>
 </head>
 <body>
  <div id='side-panel'>
   <h1>Racing</h1>
   <div>
    <h2>Setup</h2>
    <h3>Select track</h3>
    <select>
     <option>Suzuka</option>
     <option>Albert Park</option>
     <option>Philip Island</option>
    </select>
    <h3>Select Ghosts</h3>
    <table>
     <tbody>
      <tr>
       <td><input type="checkbox"></td>
       <td>Best this session</td>
      </tr>
      <tr>
       <td><input type="checkbox"></td>
       <td>Best ever human</td>
      </tr>
      <tr>
       <td><input type="checkbox"></td>
       <td>Best ever computer</td>
      </tr>
     </tbody>
    </table>
   </div>
   <div>
    <h2>Session</h2>
    <table>
     <tbody>
      <tr>
       <th>Best lap:</th>
       <td>-</td>
      </tr>
      <tr>
       <th>Lap 6 (curr):</th>
       <td>-</td>
      </tr>
      <tr>
       <th>Lap 5 (prev):</th>
       <td>-</td>
      </tr>
      <tr>
       <th>Lap 4:</th>
       <td>-</td>
      </tr>
      <tr>
       <th>Lap 3:</th>
       <td>-</td>
      </tr>
      <tr>
       <th>Lap 2:</th>
       <td>-</td>
      </tr>
      <tr>
       <th>Lap 1:</th>
       <td>-</td>
      </tr>
     </tbody>
    </table>
   </div>
  </div>
  <canvas id='canvas' width='1000' height='1000'></canvas>
 </body>
</html>
<?php
/*******************************************END*OF*FILE********************************************/
?>
