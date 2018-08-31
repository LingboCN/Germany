<template>
    <div class="team_standings">
        <div class="team_standings_body">
            <div class="col_r_tit">
                            <span>
                                积分
                                <i></i>
                            </span>
                <a href="#" target="_blank" class="more"></a>
            </div>
            <table class="team_standings_table">
                <colgroup>
                    <col class="standings_list1">
                    <col class="standings_list2">
                    <col class="standings_list3">
                    <col class="standings_list4">
                    <col class="standings_list5">
                    <col class="standings_list6">
                </colgroup>
                <thead>
                <tr>
                    <th>排名</th>
                    <th>球队</th>
                    <th>胜负平</th>
                    <th>进球</th>
                    <th>失球</th>
                    <th>积分</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><em class="red">1</em></td>
                    <td>乌拉圭</td>
                    <td>3|0|0</td>
                    <td>5</td>
                    <td>0</td>
                    <td>9</td>
                </tr>
                <tr>
                    <td><em>2</em></td>
                    <td>俄罗斯</td>
                    <td>2|0|1</td>
                    <td>8</td>
                    <td>4</td>
                    <td>6</td>
                </tr>
                <tr>
                    <td><em>3</em></td>
                    <td>沙特阿拉伯</td>
                    <td>1|0|2</td>
                    <td>2</td>
                    <td>7</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td><em>4</em></td>
                    <td>埃及</td>
                    <td>0|0|3</td>
                    <td>2</td>
                    <td>6</td>
                    <td>0</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ModTeamstanding"
    }
</script>

<style scoped>

</style>