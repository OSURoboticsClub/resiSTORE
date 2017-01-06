<?
/* The purpose of this script is to flip a boolean value contained in
 * 'path/to/web_scripts/lux.bool.' It requires the authentication phrase in
 * order to execute.
 *
 * If the client fails either of these, they are instead served
 * "The Interjection," by Richard M. Stallman.
 *
 * Author: @Gzxgzxgzx
 */

$AUTH = "gentooisthebestdistroofalltime";
$SCRIPT = "https://script.google.com/macros/s/AKfycby2DhQopQ8cdCmxyUfjFOd3ge3_LjJ-iv4ZwOIQ6_BhWu6G0oU/exec";

if ( ($_GET["auth"] == $AUTH) ) {
  /* Check that state POST is set and valid (0 or 1) */
  $state_set = isset( $_GET['state'] );
  $state_valid = ( $_GET['state'] == "0" ) || ( $_GET['state'] == "1");

  /* Write state to file */
  if ( $state_set && $state_valid ) {
    $file = fopen("lux.bool", "r+") or die("1");
    $in = fgets( $file );

    $out = $_GET['state'] . "\n";

    ftruncate( $file, 0 );
    rewind( $file );
    fwrite( $file, $out );

    echo $out;

    fclose( $file );

    header('Content-Type: application/json');
    $curl_url = $SCRIPT . "?state=" . $_GET['state'];
    $curl = curl_init($curl_url);
    curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
    curl_exec($curl);
  } else {
    echo "-1";
  }
} else {
  echo "<p style=\"width: 500px;\">";
  echo "<b>The Interjection</b><br><br>";
  echo "I'd just like to interject for a moment. What you’re referring to as Linux, is in fact,
  GNU/Linux, or as I’ve recently taken to calling it, GNU plus Linux. Linux is not an operating
  system unto itself, but rather another free component of a fully functioning GNU system made
  useful by the GNU corelibs, shell utilities and vital system components comprising a full OS as
  defined by POSIX.<br><br>

  Many computer users run a modified version of the GNU system every day, without realizing it.
  Through a peculiar turn of events, the version of GNU which is widely used today is often called
  “Linux”, and many of its users are not aware that it is basically the GNU system, developed by the
  GNU Project. There really is a Linux, and these people are using it, but it is just a part of
  the system they use.<br><br>

  Linux is the kernel: the program in the system that allocates the machine’s resources to the other
  programs that you run. The kernel is an essential part of an operating system, but useless by
  itself; it can only function in the context of a complete operating system. Linux is normally used
  in combination with the GNU operating system: the whole system is basically GNU with Linux added,
  or GNU/Linux. All the so-called “Linux” distributions are really distributions of GNU/Linux.<br><br>";
  echo "<b> &ndash; Richard M. Stallman</b>";
  echo "</p>";
}
