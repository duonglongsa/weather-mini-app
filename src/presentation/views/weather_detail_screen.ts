import mxflutter, {
    MXJSStatelessWidget,
    MXJSStatefulWidget,
    MXJSWidgetState,
    MXJSBuildContext,
    State,
    StatefulWidget,
    MXJSLog,

} from 'mxflutter';
import { MaterialApp, Theme, Scaffold, AppBar, FloatingActionButton, Icons, ListView, BuildContext, ListTile, Widget, GlobalKey, AnimatedList, SlideTransition, Tween, Offset, LabeledGlobalKey, Padding, Row, Expanded, Container, EdgeInsets, TextField, InputDecoration, FlatButton, Colors, TextStyle, TextAlign, FontWeight, TextEditingController, BoxDecoration, Alignment, LinearGradient, Color, MediaQuery, CrossAxisAlignment, MainAxisSize, NetworkImage, BoxFit, Image, SizedBox, Axis, WidgetsBinding, CircularProgressIndicator, TextFormField, InputBorder, SingleChildScrollView } from 'mxflutter-widgets/material';
import { Column, Text, Center, Icon } from 'mxflutter-widgets/widgets';
import { MainAxisAlignment, ScrollDirection } from 'mxflutter-widgets/rendering';
import { ImageFilterEngineLayer } from 'mxflutter-widgets/mx-dart-sdk';
import { HorizontalDragGestureRecognizer } from 'mxflutter-widgets/gestures';
import { Dio } from 'mxflutter-dio';
import { WeatherDetailViewModel } from '../view_model/weather_detail_viewmodel';
import { NetworkConfig } from '../../config/network_config';

export class WeatherPage extends StatefulWidget {
    public city: string;
    constructor(city: string) {
        super();
        this.city = city;
    }
    public createState() {
        MXJSLog.log("Create state" + this.city);
        return new WeatherPageState(this.city);
    }
}

class WeatherPageState extends State {
    public textController: TextEditingController;
    public city: string;
    public weatherDetailViewmodel: any;

    public constructor(city: string) {
        super();
        this.textController = new TextEditingController();
        this.weatherDetailViewmodel = WeatherDetailViewModel.Instance;
        this.city = city;
    }

    initState(): void {
        super.initState();
        MXJSLog.log("Init state" + this.city);
        this.getWeatherData(this.city);
    }

    async getWeatherData(city: string) {
        this.weatherDetailViewmodel.weatherDetail = null;
        this.setState(() => { });
        await this.weatherDetailViewmodel.getWeatherData(city.toLocaleLowerCase().replace(/\s/g, ""));
        this.setState(() => { });
    }

    public build(context) {
        return new Scaffold({
            appBar: new AppBar({
                backgroundColor: Colors.white,
                title: new Text(this.city)
            }),
            body: new SingleChildScrollView({
                child: new Container({
                    width: MediaQuery.of(context).size.width,
                    height: MediaQuery.of(context).size.height,
                    color: Colors.white,
                    child: this.weatherDetailViewmodel.weatherDetail != null ? new Column({
                        crossAxisAlignment: CrossAxisAlignment.center,
                        mainAxisAlignment: MainAxisAlignment.center,
                        mainAxisSize: MainAxisSize.min,
                        children: [
                            new SizedBox({ height: 20 }),
                            new Row({
                                mainAxisAlignment: MainAxisAlignment.center,
                                children: [
                                    new Icon(Icons.location_on_outlined),
                                    new Text(
                                        this.weatherDetailViewmodel.weatherDetail.city, {
                                        style: new TextStyle({
                                            color: Colors.black,
                                            fontWeight: FontWeight.bold,
                                            fontSize: 40
                                        })
                                    }),
                                ]
                            }),
                            Image.network(NetworkConfig.WEATHER_ICON_URL + this.weatherDetailViewmodel.weatherDetail.icon + "@4x.png", {
                                fit: BoxFit.cover,
                                height: MediaQuery.of(context).size.width * 0.3,
                                width: MediaQuery.of(context).size.width * 0.3,
                            }),
                            new Text(this.weatherDetailViewmodel.weatherDetail.descriptions, {
                                style: new TextStyle({
                                    color: Colors.black,
                                    fontWeight: FontWeight.bold,
                                    fontSize: 30
                                })
                            }),
                            new SizedBox({ height: 10 }),
                            new Text(this.weatherDetailViewmodel.weatherDetail.temperature.toString() + "\u2103", {
                                style: new TextStyle({
                                    color: Colors.black,
                                    fontWeight: FontWeight.bold,
                                    fontSize: 40
                                })
                            }),
                            new SizedBox({ height: 40 }),
                            new Row({
                                mainAxisAlignment: MainAxisAlignment.spaceAround,
                                children: [
                                    new Column({
                                        mainAxisAlignment: MainAxisAlignment.center,
                                        children: [
                                            new Text("Wind speed", {
                                                style: new TextStyle({
                                                    color: new Color(0xffc4c4c4),
                                                    fontSize: 12
                                                })
                                            }),
                                            new Text(this.weatherDetailViewmodel.weatherDetail.windSpeed.toString() + "m/s", {
                                                style: new TextStyle({
                                                    color: new Color(0xff9a9a9a),
                                                    fontWeight: FontWeight.bold,
                                                    fontSize: 15
                                                })
                                            }),

                                        ]
                                    }),
                                    new Column({
                                        mainAxisAlignment: MainAxisAlignment.center,
                                        children: [
                                            new Text("Humidity", {
                                                style: new TextStyle({
                                                    color: new Color(0xffc4c4c4),
                                                    fontSize: 12
                                                })
                                            }),
                                            new Text(this.weatherDetailViewmodel.weatherDetail.humidity + "%".toString(), {
                                                style: new TextStyle({
                                                    color: new Color(0xff9a9a9a),
                                                    fontWeight: FontWeight.bold,
                                                    fontSize: 15
                                                })
                                            }),

                                        ]
                                    }),
                                ]
                            }),


                        ],
                    }) : new Center({ child: new CircularProgressIndicator() }),
                }),
            })
        });

    }
}