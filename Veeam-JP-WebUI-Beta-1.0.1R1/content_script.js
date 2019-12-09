// Veeam Enterprise Manager UI JP Language Pack
// Beta1tats版　


window.addEventListener('load', walk(document.body));
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    walk(document.body);
  });
});

// Notify me of everything!
var observerConfig = {
  attributes: true,
  childList: true,
  characterData: true
};

// Node, config
// In this case we'll listen to all changes to body and child nodes
var targetNode = document.body;
observer.observe(targetNode, observerConfig);


function walk(node) {
  var ignore = {
    "STYLE": 0,
    "SCRIPT": 0,
    "NOSCRIPT": 0,
    "IFRAME": 0,
    "OBJECT": 0
  };
  // I stole this function from here:
  // http://is.gd/mwZp7E

  var child, next;

  if (node.nodeName.toLowerCase() == 'input' || node.nodeName.toLowerCase() == 'textarea' || (node.classList && node.classList.contains('x-grid-cell-inner')) || (node.classList && node.classList.contains('ace_editor'))) {
    return;
  }

  if (node.tagName in ignore) return;

  switch (node.nodeType) {
    case 1: // Element
    case 9: // Document
    case 11: // Document fragment
      child = node.firstChild;
      while (child) {
        next = child.nextSibling;
        walk(child);
        child = next;
      }
      break;

    case 3: // Text node
      handleText(node);
      break;
  }
}



function handleText(textNode) {

  var v = textNode.nodeValue;

  // エクセル辞書ファイルからコピペ

  v = v.replace(/^Select virtual machines to process$/igm, "保護対象の仮想マシンを選択");
  v = v.replace(/^Created by$/igm, "作成日");
  v = v.replace(/^Choose guest OS processing options available for running VMs$/igm, "ゲストOS処理を選択してください");
  v = v.replace(/^Enable application-aware image-processing $/igm, "アプリケーションアウェアな画像処理");
  v = v.replace(/^Run the job automatically:$/igm, "ジョブを自動的に実行");
  v = v.replace(/^Daily at this time$/igm, "日次");
  v = v.replace(/^Monthly at$/igm, "月次");
  v = v.replace(/\bAll changes will be lost. Do you want to proceed?\b/igm, "変更が保存されていません。続けますか？");
  v = v.replace(/^Select VM to view details$/igm, "詳細を表示");
  v = v.replace(/^Self-Service Backup Portal For$/igm, "Veeamセルフサービスポータル");
  v = v.replace(/^Wait before each attempt for$/igm, "連続リトライの間隔");
  v = v.replace(/^Terminate job if it gets out of allowed backup window$/igm, "ウィンドウ外の場合ジョブを停止");
  v = v.replace(/^Last 24 hours$/igm, "直近24時間");
  v = v.replace(/^Last 7 days$/igm, "直近7日間");
  v = v.replace(/^Specify the job name, description and retention policy$/igm, "設定項目を入力してください");
  v = v.replace(/^Job name$/igm, "ジョブ名");
  v = v.replace(/^Retention policy$/igm, "保管ポリシー");
  v = v.replace(/^Restore points to keep on disk:$/igm, "リストアポイント数");
  v = v.replace(/^Close Wizard$/igm, "ウィザード");
  v = v.replace(/^Virtual Machines$/igm, "仮想マシン");
  v = v.replace(/^Add Objects$/igm, "オブジェクトの追加");
  v = v.replace(/^Job Schedule$/igm, "ジョブスケジュール");
  v = v.replace(/^Backup window$/igm, "バックアップウィンドウ");
  v = v.replace(/^Self-service backup portal$/igm, "バックアップポータル");
  v = v.replace(/^has been created successfully.$/igm, "：ジョブが正常に保存されました");
  v = v.replace(/^Instance license support is in progress$/igm, "ライセンスサポートが有効です");
  v = v.replace(/^Average speed$/igm, "平均スピード");
  v = v.replace(/^Backup Storage$/igm, "バックアップストレージ");
  v = v.replace(/^Type in$/igm, "入力");
  v = v.replace(/^Restore Point$/igm, "リストアポイント");
  v = v.replace(/^Database to restore:$/igm, "リストアするデータベース");
  v = v.replace(/^Point in time$/igm, "ポイントインタイム");
  v = v.replace(/^Restore to$/igm, "リストア先");
  v = v.replace(/^Latest Run$/igm, "最終実行");
  v = v.replace(/^Next Run$/igm, "次回実行");
  v = v.replace(/\bFailover Plan\b/igm, "DRプラン");
  v = v.replace(/^Quick Backup$/igm, "簡単バックアップ");
  v = v.replace(/^Last Success$/igm, "最終");
  v = v.replace(/^Pick from List$/igm, "リストから選択");
  v = v.replace(/^Add to$/igm, "追加：");
  v = v.replace(/^Backup servers$/igm, "バックアップサーバ");
  v = v.replace(/^Processing speed$/igm, "処理速度");
  v = v.replace(/^Source size$/igm, "ソース容量");
  v = v.replace(/^Full backups$/igm, "フル・バックアップ");
  v = v.replace(/^Restore points$/igm, "リストアポイント");
  v = v.replace(/^Total job runs$/igm, "合計ジョブ実行数");
  v = v.replace(/^Succeeded jobs$/igm, "成功");
  v = v.replace(/^Management server$/igm, "管理サーバ");
  v = v.replace(/^Never started$/igm, "履歴なし");
  v = v.replace(/^Virtual machine$/igm, "仮想マシン");
  v = v.replace(/^No Filter$/igm, "フィルタ解除");
  v = v.replace(/^Application-Aware Processing Options$/igm, "アプリケーション設定オプション");
  v = v.replace(/^Veeam Backup Enterprise Manager$/igm, "Veeamセルフサービスポータル");
  v = v.replace(/^Welcome$/igm, "ようこそ");
  v = v.replace(/^Please log in$/igm, "ログインしてください");
  v = v.replace(/\bUsername\b/igm, "ユーザ名");
  v = v.replace(/^Password$/igm, "パスワード");
  v = v.replace(/^Remember me$/igm, "ログイン内容を保存");
  v = v.replace(/^Login$/igm, "ログイン");
  v = v.replace(/\bLoading, please stand by\b/igm, "ロード中");
  v = v.replace(/^Loading$/igm, "ロード中");
  v = v.replace(/^Create Backup Job$/igm, "バックアップジョブ作成");
  v = v.replace(/^Job Settings$/igm, "基本設定");
  v = v.replace(/^Description$/igm, "説明");
  v = v.replace(/^Next$/igm, "次へ");
  v = v.replace(/^Cancel$/igm, "キャンセル");
  v = v.replace(/^Yes$/igm, "はい");
  v = v.replace(/^No$/igm, "いいえ");
  v = v.replace(/^Add$/igm, "追加");
  v = v.replace(/^Remove$/igm, "削除");
  v = v.replace(/\bExclusions\b/igm, "除外");
  v = v.replace(/\bUp\b/igm, "上");
  v = v.replace(/^Down$/igm, "下");
  v = v.replace(/^Name$/igm, "VM名");
  v = v.replace(/^Type$/igm, "タイプ");
  v = v.replace(/^Guest Processing$/igm, "ゲストOS処理");
  v = v.replace(/^Enable guest file system indexing$/igm, "ゲストファイルのインデックス");
  v = v.replace(/^Guest OS credentials$/igm, "ゲストOSログイン情報");
  v = v.replace(/^Credentials$/igm, "ログイン情報");
  v = v.replace(/^Customize Credentials$/igm, "ログイン情報を指定");
  v = v.replace(/^Specify the job scheduling options$/igm, "ジョブスケジュールのオプションを選択してください");
  v = v.replace(/^Automatic retry$/igm, "自動リトライ");
  v = v.replace(/^Retry failed VM processing$/igm, "エラー時のリトライ回数");
  v = v.replace(/^Email notifications$/igm, "メール通知");
  v = v.replace(/^Specify recipients and settings for the job status emails:$/igm, "メール通知の宛先");
  v = v.replace(/^Enable e-mail notifications$/igm, "メール通知を有効にする");
  v = v.replace(/^Recipients$/igm, "宛先");
  v = v.replace(/\bSubject\b/igm, "件名");
  v = v.replace(/^Notify on success$/igm, "成功時にメール通知");
  v = v.replace(/^Notify on warning$/igm, "警告時にメール通知");
  v = v.replace(/^Notify on error$/igm, "エラー時にメール通知");
  v = v.replace(/^Suppress notifications until the last retry$/igm, "最終リトライまで通知しない");
  v = v.replace(/^Back$/igm, "戻る");
  v = v.replace(/^Finish$/igm, "完了");
  v = v.replace(/^Saving$/igm, "保存中");
  v = v.replace(/^Show$/igm, "表示");
  v = v.replace(/^All$/igm, "全て");
  v = v.replace(/^None$/igm, "なし");
  v = v.replace(/^Throughput$/igm, "スループット");
  v = v.replace(/^Job$/igm, "ジョブ");
  v = v.replace(/^Success$/igm, "成功");
  v = v.replace(/^Export$/igm, "エキスポート");
  v = v.replace(/^Delete$/igm, "削除");
  v = v.replace(/^Total$/igm, "合計");
  v = v.replace(/^points$/igm, "ポイント");
  v = v.replace(/^runs$/igm, "実行");
  v = v.replace(/^Succeeded$/igm, "成功");
  v = v.replace(/^Source$/igm, "元");
  v = v.replace(/^size$/igm, "サイズ");
  v = v.replace(/^Verification$/igm, "確認");
  v = v.replace(/^Server$/igm, "サーバ");
  v = v.replace(/^Protected$/igm, "保護対象");
  v = v.replace(/^VMs$/igm, "仮想マシン");
  v = v.replace(/^Max duration$/igm, "最長ジョブ");
  v = v.replace(/^Quota$/igm, "容量");
  v = v.replace(/^Used$/igm, "使用");
  v = v.replace(/\bCreate\b/igm, "作成");
  v = v.replace(/^Last$/igm, "最終");
  v = v.replace(/^Search$/igm, "検索");
  v = v.replace(/^Owner$/igm, "作成者");
  v = v.replace(/^Database$/igm, "データベース");
  v = v.replace(/^Original$/igm, "元の");
  v = v.replace(/^Alternative$/igm, "別の");
  v = v.replace(/^This$/igm, "次の");
  v = v.replace(/^Server:$/igm, "サーバ：");
  v = v.replace(/^Dashboard$/igm, "ダッシュボード");
  v = v.replace(/^Reports$/igm, "レポート");
  v = v.replace(/^All Servers $/igm, "全てのサーバ");
  v = v.replace(/^Backup Server$/igm, "バックアップサーバ");
  v = v.replace(/^Jobs$/igm, "ジョブ");
  v = v.replace(/^Start$/igm, "実行");
  v = v.replace(/^Stop$/igm, "停止");
  v = v.replace(/^Retry$/igm, "再実行");
  v = v.replace(/^Name$/igm, "タイトル");
  v = v.replace(/^Type$/igm, "タイプ");
  v = v.replace(/^Platform$/igm, "プラットフォーム");
  v = v.replace(/^Description$/igm, "説明");
  v = v.replace(/^Created$/igm, "作成");
  v = v.replace(/^Machines$/igm, "マシン");
  v = v.replace(/^Machine$/igm, "マシン");
  v = v.replace(/^Restore$/igm, "リストア");
  v = v.replace(/^History$/igm, "履歴");
  v = v.replace(/^Location$/igm, "格納場所");
  v = v.replace(/^Path$/igm, "パス");
  v = v.replace(/^Files$/igm, "ファイル");
  v = v.replace(/^Download$/igm, "ダウンロード");
  v = v.replace(/^Items$/igm, "アイテム");
  v = v.replace(/^Requests$/igm, "リクエスト");
  v = v.replace(/^Configuration$/igm, "設定");
  v = v.replace(/^Refresh$/igm, "更新");
  v = v.replace(/^Summary$/igm, "サマリー");
  v = v.replace(/^Jobs$/igm, "ジョブ");
  v = v.replace(/^Machines$/igm, "仮想マシン");
  v = v.replace(/^Templates$/igm, "テンプレート");
  v = v.replace(/^Data$/igm, "データ");
  v = v.replace(/^Warning$/igm, "警告");
  v = v.replace(/^Error$/igm, "エラー");
  v = v.replace(/^Status$/igm, "ステータス");
  v = v.replace(/^Backups$/igm, "バックアップ");
  v = v.replace(/^Backup servers$/igm, "バックアップサーバ");
  v = v.replace(/^License$/igm, "ライセンス");
  v = v.replace(/^Reload$/igm, "更新");
  v = v.replace(/^Tags$/igm, "タグ");
  v = v.replace(/^and$/igm, "と");
  v = v.replace(/^Everything$/igm, "全て");
  v = v.replace(/^Category$/igm, "カテゴリ");
  v = v.replace(/^Starting$/igm, "開始");
  v = v.replace(/^Working$/igm, "実行中");
  v = v.replace(/^Edit$/igm, "編集");
  v = v.replace(/^Active Full$/igm, "アクティブフル");
  v = v.replace(/^Disable$/igm, "無効化");
  v = v.replace(/^Object$/igm, "オブジェクト");
  v = v.replace(/^In progress$/igm, "実行中");
  v = v.replace(/^Performance$/igm, "パフォーマンス");
  v = v.replace(/^End Time$/igm, "終了時間");
  v = v.replace(/^List$/igm, "リスト");
  v = v.replace(/^Processing rate$/igm, "処理レート");
  v = v.replace(/^Processed size$/igm, "処理サイズ");
  v = v.replace(/^Total time$/igm, "合計時間");
  v = v.replace(/^Performance Rate$/igm, "パフォーマンスレート");
  v = v.replace(/^Details$/igm, "詳細");
  v = v.replace(/^Data Transferred$/igm, "転送済みデータ");
  v = v.replace(/^Failed$/igm, "失敗");
  v = v.replace(/^Logout$/igm, "ログアウト");
  v = v.replace(/^Customize Application$/igm, "アプリケーション設定");
  v = v.replace(/^Transaction logs$/igm, "トランザクションログ");
  v = v.replace(/^Require success$/igm, "条件：成功");
  v = v.replace(/^Excludes$/igm, "除外");
  v = v.replace(/^General$/igm, "全般");
  v = v.replace(/^Applications$/igm, "アプリケーション");
  v = v.replace(/^Require successful application processing$/igm, "正常なアプリケーション処理を要求");
  v = v.replace(/^Ignore application processing failures$/igm, "アプリケーション処理の失敗を無視");
  v = v.replace(/^Transaction logs processing$/igm, "トランザクションログの処理");
  v = v.replace(/^times$/igm, "回");
  v = v.replace(/^minutes$/igm, "分");
  v = v.replace(/^Mail$/igm, "メール");
  v = v.replace(/^Calendar$/igm, "カレンダー");
  v = v.replace(/^Contacts$/igm, "連絡先");
  v = v.replace(/^Type in VM name:$/igm, "VM名を入力:");
  v = v.replace(/^Pick from List…$/igm, "リストから選択…");
  v = v.replace(/^VM Name$/igm, "VM名");
  v = v.replace(/^Add to Restore List$/igm, "リストアリストに追加");
  v = v.replace(/^To searching for a file, enter its name in the search box above and click "Search"$/igm, "特定のファイルを検索する場合は、ファイル名を入力し検索してください。");
  v = v.replace(/^Only backups made with the guest files indexing enabled can be searched here.$/igm, "ゲストファイルインデックスが有効のバックアップのみ検索できます。");
  v = v.replace(/^SQL Database$/igm, "SQL データベース");
  v = v.replace(/^Restore point:$/igm, "リストアポイント：");
  v = v.replace(/^Point in time:$/igm, "ポイント・イン・タイム");
  v = v.replace(/^Restore to:$/igm, "リストア先：");
  v = v.replace(/^Original location$/igm, "元のロケーション");
  v = v.replace(/^Alternative location$/igm, "別のロケーション");
  v = v.replace(/^Available databases will be shown after specifying an instance name$/igm, "インスタンス名を指定後、リストア可能なデータベースが表示されます");
  v = v.replace(/^Oracle Database$/igm, "Oracle データベース");
  v = v.replace(/^SQL server:$/igm, "SQL サーバ");
  v = v.replace(/^No restore point selected$/igm, "リストアポイントが選択されていません");
  v = v.replace(/^Backup server:$/igm, "バックアップサーバ");
  v = v.replace(/^Status (All)$/igm, "ステータス（全て）");
  v = v.replace(/^Idle$/igm, "停止中");
  v = v.replace(/^Success$/igm, "成功");
  v = v.replace(/^Warning$/igm, "警告");
  v = v.replace(/^Never started$/igm, "実行履歴なし");
  v = v.replace(/^Clone$/igm, "クローン");
  v = v.replace(/^Disable$/igm, "無効化");
  v = v.replace(/^Waiting tape$/igm, "テープ待機中");
  v = v.replace(/^Stopping$/igm, "停止中");
  v = v.replace(/^Create…$/igm, "新規作成");
  v = v.replace(/^Job name:$/igm, "ジョブ名：");
  v = v.replace(/^Previous$/igm, "戻る");
  v = v.replace(/^Apply$/igm, "適用");
  v = v.replace(/^Description:$/igm, "説明：");
  v = v.replace(/^Welcome! Please log in.$/igm, "ようこそ。ログインしてください。");
  v = v.replace(/^Warning Jobs$/igm, "警告");
  v = v.replace(/^Error Jobs$/igm, "エラー");
  v = v.replace(/^Total size$/igm, "合計サイズ");
  v = v.replace(/^Verification Jobs Count$/igm, "確認ジョブ数");
  v = v.replace(/^Source Data Size$/igm, "ソースデータ量");
  v = v.replace(/^Server Description$/igm, "サーバ情報");
  v = v.replace(/^Start now$/igm, "すぐにDRを開始する");
  v = v.replace(/^Start to most recent replica prior to:$/igm, "この日時以降の最新のレプリカにDRする");
  v = v.replace(/^Undo$/igm, "DR");
  v = v.replace(/^Quick Backup task has been started$/igm, "クイックバックアップが開始されました");
  v = v.replace(/\bApprove\b/igm, "承認");
  v = v.replace(/\bReject\b/igm, "却下");
  v = v.replace(/\bProlong\b/igm, "延期");
  v = v.replace(/\bUser name\b/igm, "ユーザ名");
  v = v.replace(/\bLog\b/igm, "ログ");
  v = v.replace(/^Date$/igm, "日付");
  v = v.replace(/^Duration$/igm, "期間");
  v = v.replace(/^State$/igm, "ステータス");
  v = v.replace(/^Start Time$/igm, "開始時間");
  v = v.replace(/\bMachines processed:\b/igm, "完了済みVM：");
  v = v.replace(/^Errors:$/igm, "エラー：");
  v = v.replace(/^Warnings:$/igm, "警告：");
  v = v.replace(/^Total size:$/igm, "合計サイズ：");
  v = v.replace(/^Processing rate:$/igm, "処理レート：");
  v = v.replace(/^Processed time:$/igm, "処理時間：");
  v = v.replace(/^Processed size:$/igm, "処理サイズ：");
  v = v.replace(/^Total time:$/igm, "合計時間：");
  v = v.replace(/\bminute\b/igm, "分");
  v = v.replace(/\bTime\b/igm, "時間");
  v = v.replace(/\bInformation\b/igm, "情報");
  v = v.replace(/^Job session$/igm, "ジョブ セッション");
  v = v.replace(/\bClose\b/igm, "閉じる");
  v = v.replace(/\bShow:\b/igm, "表示：");
  v = v.replace(/^Select failover plan$/igm, "F/Oプランを選択");
  v = v.replace(/^Select Machine$/igm, "マシンを選択");
  v = v.replace(/\bSelect\b/igm, "選択");
  v = v.replace(/^Anywhere on this computer$/igm, "このコンピュータ内");
  v = v.replace(/\bFolder\b/igm, "フォルダ");
  v = v.replace(/\bBrowse\b/igm, "参照");
  v = v.replace(/^Last modification time$/igm, "最終更新日時");
  v = v.replace(/^Approximate Time:$/igm, "[TBD]おおよその日時");
  v = v.replace(/^Time Period:$/igm, "[TBD]日時指定");
  v = v.replace(/^Latest backup$/igm, "最終バックアップ");
  v = v.replace(/^Backup period:$/igm, "バックアップ期間");
  v = v.replace(/^vCenter Servers$/igm, "vCenterサーバ");
  v = v.replace(/^Self-service$/igm, "セルフサービス");
  v = v.replace(/^Search Servers$/igm, "検索サーバ");
  v = v.replace(/^Sessions$/igm, "セッション");
  v = v.replace(/^Roles$/igm, "ロール");
  v = v.replace(/^Settings$/igm, "設定");
  v = v.replace(/^Licensing$/igm, "ライセンス");
  v = v.replace(/^Notifications$/igm, "通知");
  v = v.replace(/^Key Management$/igm, "キー管理");
  v = v.replace(/^Self-Service Backup Portal$/igm, "バックアップポータル：");
  v = v.replace(/^Filter Statuses$/igm, "フィルタ");
  v = v.replace(/^Restore...$/igm, "リストア");
  v = v.replace(/^Overwrite$/igm, "上書き");
  v = v.replace(/^Keep$/igm, "保全");
  v = v.replace(/^To search for a file, enter a part of its name and click "Search"$/igm, "ファイルを検索するにはファイル名の一部を入力してください");
  v = v.replace(/^Application Item Type$/igm, "アプリケーションアイテムの種類");
v = v.replace(/^Initiated by$/igm, "実行者");
v = v.replace(/^Ended at$/igm, "終了時間");
v = v.replace(/^Started at$/igm, "開始時間");
v = v.replace(/^Items Restore History$/igm, "アイテムのリストア履歴");
v = v.replace(/^Select machine restore point$/igm, "リストアポイント指定");
v = v.replace(/\bAdd...\b/igm, "追加");
v = v.replace(/^Rebuild Roles$/igm, "ロールの再設定");
v = v.replace(/\bAccount\b/igm, "アカウント");
v = v.replace(/\bRole\b/igm, "ロール");
v = v.replace(/^Start Collecting$/igm, "収集開始");
v = v.replace(/\bCheck version\b/igm, "バージョン確認");
v = v.replace(/^Repository$/igm, "レポジトリ");
v = v.replace(/^Per-user$/igm, "ユーザ名単位");
v = v.replace(/^Delegation Mode$/igm, "[TBD]モード");
v = v.replace(/^Sync Catalog Now$/igm, "カタログ同期");
v = v.replace(/\bSchedule\b/igm, "スケジュール");
v = v.replace(/\bEdit\b/igm, "編集");
v = v.replace(/\bInstall\b/igm, "インストール");
v = v.replace(/^Stop Sync$/igm, "同期の中止");
v = v.replace(/^Usage$/igm, "利用量");
v = v.replace(/^Usage$/igm, "利用量");
v = v.replace(/^Summary$/igm, "サマリー");
v = v.replace(/^Instances$/igm, "インスタンス");
v = v.replace(/^Details$/igm, "詳細");
v = v.replace(/^Reports$/igm, "レポート");
v = v.replace(/^Install license$/igm, "ライセンス適用");













  textNode.nodeValue = v;
}
