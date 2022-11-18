import mxflutter, {
    MXJSStatelessWidget,
    MXJSStatefulWidget,
    MXJSWidgetState,
    MXJSBuildContext,
    State,
    StatefulWidget,
    MXJSLog,
    MXJSPageWidget,
    MXMirrorObjMethodCall,

} from 'mxflutter';
import { MaterialApp, Theme, Scaffold, AppBar, FloatingActionButton, Icons, ListView, BuildContext, ListTile, Widget, GlobalKey, AnimatedList, SlideTransition, Tween, Offset, LabeledGlobalKey, Padding, Row, Expanded, Container, EdgeInsets, TextField, InputDecoration, FlatButton, Colors, TextStyle, TextAlign, FontWeight, TextEditingController, BoxDecoration, Alignment, LinearGradient, Color, MediaQuery, CrossAxisAlignment, MainAxisSize, NetworkImage, BoxFit, Image, SizedBox, Axis, WidgetsBinding, CircularProgressIndicator, TextFormField, InputBorder, SingleChildScrollView, Card, InkWell, Navigator, MaterialPageRoute, CustomScrollView, SliverLayoutBuilder, SliverList, SliverChildBuilderDelegate, IconButton } from 'mxflutter-widgets/material';
import { Column, Text, Center, Icon } from 'mxflutter-widgets/widgets';
import { MainAxisAlignment, ScrollDirection } from 'mxflutter-widgets/rendering';
import { DateTime, ImageFilterEngineLayer } from 'mxflutter-widgets/mx-dart-sdk';
import { HorizontalDragGestureRecognizer } from 'mxflutter-widgets/gestures';
import { Dio } from 'mxflutter-dio';
import { WeatherDetailViewModel } from '../view_model/weather_detail_viewmodel';
import { NetworkConfig } from '../../config/network_config';
import { WeatherPage } from './weather_detail_screen';
import { SchedulerBinding } from 'mxflutter-widgets/scheduler';
import { MXMirrorExample } from '../../calling_super_app_func';


export class CityListScreen extends StatefulWidget {

    public createState() {
        return new CityListState();
    }
}

class CityListState extends State {
    public cityList: Array<string>;
    public isLoading: boolean;
    public searchList: Array<string>;
    public superAppConnector: MXMirrorExample;

    constructor() {
        super();
        this.cityList = [];
        this.searchList = [];
        this.isLoading = false;
        this.superAppConnector = new MXMirrorExample();
    }

    initState(): void {
        super.initState();
        this.getCityList();
    }

    async getCityList() {
        MXJSLog.log("get list");
        this.isLoading = true;
        this.setState(() => { });
        let dio = Dio();
        var startApi = Date.now();
        let response = await dio.get(
            'https://raw.githubusercontent.com/manifestinteractive/openweathermap-cities/master/data/owm_city_list.json', {
            queryParameters: {}
        });
        var endApi = Date.now(); 
        MXJSLog.log("calling api time: " + (endApi.valueOf() - startApi.valueOf()));
        let res: any[] = JSON.parse(response.data)["RECORDS"] as [];
        var startLoop = Date.now();
        for (let index = 0; index < res.length; index++) {
            const item = res[index].owm_city_name;
            this.cityList.push(item);
            this.searchList.push(item);
        }
        var endLoop = Date.now();
        MXJSLog.log("loop time: " + (endLoop.valueOf() - startLoop.valueOf()));
        this.isLoading = false;
        MXJSLog.log("list length: " + this.cityList.length.toString());
        this.setState(() => { });
        MXJSLog.log(Date.now().valueOf().toString());
    }


    public build(context) {
        const that = this;
        return new Scaffold({
            appBar: new AppBar({
                backgroundColor: Colors.white,
                actions: [new IconButton({
                    icon: new Icon(Icons.menu_open),
                    onPressed: () => {
                        this.superAppConnector.navigateToMiniApp("com.app.20002501", {bizPath: ""});
                    }
                })],
                title: new Padding({
                    padding: EdgeInsets.all(10.0),
                    child: new Container({
                        child: new TextField({
                            decoration: new InputDecoration({
                                filled: true,
                                fillColor: Colors.grey[50],
                                hintText: "Search location",
                                suffixIcon: new Icon(Icons.search),
                                border: InputBorder.none
                            }),
                            onChanged: (text) => {
                                MXJSLog.log("Search: " + text);
                                this.isLoading = true;
                                this.setState(() => { });
                                this.searchList = [];
                                for (let index = 0; index < this.cityList.length; index++) {
                                    const element = this.cityList[index];
                                    if(element.toLowerCase().includes(text.toLowerCase())){
                                        this.searchList.push(element);
                                    }
                                }
                                // for (int i = 0; i < this.cityList.length; i++) {
                                //     if (city.toLowerCase().includes(text.toLowerCase())) {
                                //         this.searchList.push(city);
                                //     }
                                // }
                                this.isLoading = false;
                                this.setState(() => { });
                            },
                        }),
                    }),
                }),
            }),
            body: !this.isLoading
                ? this.searchList.length > 0 ?
                    // new CustomScrollView({
                    //     slivers: [
                    //         new SliverList({
                    //             delegate: new SliverChildBuilderDelegate((context, index) => {
                    //                 return new InkWell({
                    //                     onTap: () => {
                    //                         new Navigator.push(
                    //                             context,
                    //                             new MaterialPageRoute({
                    //                                 builder: function (context) {
                    //                                     return new WeatherPage(this.searchList[index]);
                    //                                 },
                    //                             }),
                    //                         );
                    //                     },
                    //                     child: new Card({
                    //                         elevation: 0,
                    //                         child: new ListTile({
                    //                             title: new Text(this.searchList[index]),
                    //                             trailing: new Icon(Icons.arrow_forward_ios),
                    //                         }),
                    //                     })
                    //                 });
                    //             }, {
                    //                 childCount: this.cityList.length
                    //             })
                    //         })
                    //     ]
                    // })
                    ListView.builder({
                        itemCount: this.searchList.length,
                        itemBuilder: (_, index) => {
                            return new InkWell({
                                onTap: () => {
                                    MXJSLog.log("selected city: " + this.searchList[index]);
                                    let selectedCity = this.searchList[index];
                                    Navigator.push(
                                        context,
                                        new MaterialPageRoute({
                                            builder: function (context) {
                                                that.searchList[index]
                                                return new WeatherPage(selectedCity);
                                            },
                                        }),
                                    );
                                },
                                child: new Card({
                                    elevation: 0,
                                    child: new ListTile({
                                        title: new Text(this.searchList[index]),
                                        trailing: new Icon(Icons.arrow_forward_ios),
                                    }),
                                })
                            });
                        }
                    })
                    : new Center({ child: new Text("City not found!"), })
                : new Center({
                    child: new CircularProgressIndicator(),
                }),
        });
    }
}
