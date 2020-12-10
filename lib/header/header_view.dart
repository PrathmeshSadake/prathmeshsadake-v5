import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class HeaderView extends StatelessWidget {
  const HeaderView({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 840,
      width: 1540,
      child: Padding(
        padding: const EdgeInsets.symmetric(
          horizontal: 20.0,
        ),
        child: Row(
          children: [
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                    'I\'m a Mobile',
                    style: GoogleFonts.lato(
                      color: Colors.black,
                      fontSize: 60,
                    ),
                  ),
                  SizedBox(
                    height: 20,
                  ),
                  Text('Developer < / >'),
                  SizedBox(
                    height: 30,
                  ),
                  Text(
                      'Lorem ispukj qqkjdq dqldnq zqjhdo qceqqw woqiwr q qgiqurhoq wo uqriq pqirhpqio   ui1r o1i ihqod sdaoijsdi'),
                  SizedBox(
                    height: 40,
                  ),
                  FlatButton(
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.all(
                        Radius.circular(10),
                      ),
                    ),
                    onPressed: () {},
                    child: Padding(
                      padding: const EdgeInsets.symmetric(
                          horizontal: 20.0, vertical: 10.0),
                      child: Text('Contact me'),
                    ),
                    color: Colors.redAccent,
                  ),
                ],
              ),
            ),
            FlutterLogo(
              size: 400,
            )
          ],
        ),
      ),
    );
  }
}
