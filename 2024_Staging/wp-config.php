<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'andrewd_cm_2024' );

/** Database username */
define( 'DB_USER', 'andrewd_cm_admin' );

/** Database password */
define( 'DB_PASSWORD', 'X~&b95gGB7WEa5te' );

/** Database hostname */
define( 'DB_HOST', 'localhost:3306' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', 'VST0sCIL94FP#1v[9(s_-T+H8-5!956ZrMS6XI1Q2b|d:c-3Eq|w9kD+8vbqxJ~4');
define('SECURE_AUTH_KEY', '~8T68~r4v~Svg3Rw62pc81|_r+8:29[|77O9;dTZ311021jp5#0%h1yDk([[h6I-');
define('LOGGED_IN_KEY', '8/6InU4)6rH6v5tMSZlr2Dq1-Fj)znbm_6ODhMSi6@1&7-:eXnN5d7]6&6E#3_p/');
define('NONCE_KEY', 'tV46b%83)K#-1dVe+aI[E]n[4_U2K@e28:]De5c:7lj[#n9D0K5c2gANR1j[4T95');
define('AUTH_SALT', 'f0D43s8n(GZ7OoZ5Z7+Ky(dwj6H1i04&9~P5C1N7z2JY&Fr-*&73]g_FXL6O982E');
define('SECURE_AUTH_SALT', '9%d3+/~/]8|%%&)gy/BcVu#5zz2pSbaM]-~KD3@)~R_7_5D9:)Fn4m7(zuNs/R%j');
define('LOGGED_IN_SALT', '#uJPj~wH+w]-6V2*Ym-FNRR5q37aDp2a4;50w[de;i)4Vk3B]:#N*q971!M7bx)3');
define('NONCE_SALT', 'GJH;y:yi-S61#_@h7_J:k;;!Vit07nM4P(Iz;Dx;LdP3N!8yfK9Q88+%HYx7]q3~');


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'cmdb_';


/* Add any custom values between this line and the "stop editing" line. */

define('WP_ALLOW_MULTISITE', true);
/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', true );
}

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
