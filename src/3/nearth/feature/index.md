# 仕様まとめ
導入されているプラグインに関する設定や、サーバーの仕様を説明します。大きめな要素は各セクションに分けています。
## サーバー情報
|||
|-|-|
|バージョン|1.21.8|
|ソフトウェア|Folia[?](/4/folia)|
|マップ縮尺|1:326 (x: -61440, z: -30720 ~ x: 61440, z: 25600)|
|定期再起動|毎日午前6:0?|
## 要素内容
### 経済システム
* 単位: G（ゴールド）
* `1G = 1金インゴット`の金本位制を採用
::: tip
金インゴットは、`/spawn`にある換金所（チェストショップ）で仮想通貨と相互に取引できます。
:::
::: warning
金本位制を維持するために下記の制限があります。
* ゾンビピグリンからは金がドロップしません。
* 金装備や金ツールは精錬できません。
* ネザー金鉱石の金塊のドロップ率が大幅に低くなっています。
* ネザーでは金ブロックを破壊してもドロップしません。（ピグリン要塞による入手を防ぐため）
:::
## よく使うコマンド
::: info
* Landsのコマンドは[Lands](/2/lands/)ページをご参照ください。
* HuskHomesのコマンドは[HuskHomes](/2/huskhomes)ページをご参照ください。
:::
|コマンド|説明|
|-|-|
|/menu|NEarthサーバー総合メニューを開く|
|/spawn|広場へ行く（換金所あり）|
|/hide|ウェブマップから姿を消す|
|/unhide|ウェブマップに姿を表示させる|
|/rule|サーバーのルール（附則）を確認する|
|/co i|インスペクターモードを切り替える|
|/money<br>/bal<br>/balance|自分の持っている残高を確認する|
|/baltop<br>/balancetop|サーバー内の残高ランキングを表示する|
|/pay <プレイヤー名> <金額>|プレイヤーにお金を支払う|
|/paytoggle|他のプレイヤーからの支払いを受け付けるかどうかを切り替える|
|/jobs browse|Jobsの仕事を選択する画面を開く|
|/jobs points|今持っているポイントを確認する|
|/jobs shop|Jobsのショップを開く|
|/randomtp<br>/brtp|マップのランダムな場所にテレポートする|
|/sethome <ホーム名>|ホームを設定する（5個まで）|
|/home <ホーム名>|ホームにテレポートする|
|/delhome <ホーム名>|ホームを削除する|

## アースマップ
NEarthサーバーは、地球の地理データや気候区分をそのまま再現したワールドを使用しています。

* スケール比：`1:326`
* サイズ：`-61440, -30720 〜 61440, 25600`
* クレジット：`EarthMC.org` `0xBit` `GoodrichDev`
* 画像引用元：[1:326 Earth Map - Ore Distribution](https://earthmc.org/docs/downloads/earth-map#ore-distribution)

### 気候区分
* 地域によってバイオームが異なります。
* 南部/北部では寒冷なバイオーム、赤道付近ではより温暖なバイオームが予想されます。
* 沿岸部と山岳地帯は、降水量と植生に影響を与えます。

![](/images/ore-distribution/climate.png)

### 鉱石分布
::: warning
あくまで鉱石分布は、出る確率が高いというものです。分布にない場合でも鉱石は出現します。
:::
#### `金鉱石`
![](/images/ore-distribution/gold-ore.png)
#### `石炭鉱石`
![](/images/ore-distribution/coal-ore.png)
#### `鉄鉱石`
![](/images/ore-distribution/iron-ore.png)
#### `銅鉱石`
![](/images/ore-distribution/copper-ore.png)
#### `レッドストーン鉱石`
![](/images/ore-distribution/redstone-ore.png)
#### `ダイヤモンド鉱石`
![](/images/ore-distribution/diamond-ore.png)
#### `古代の残骸`
![](/images/ore-distribution/ancient-debris.png)
#### `クォーツ鉱石`
![](/images/ore-distribution/quartz-ore.png)