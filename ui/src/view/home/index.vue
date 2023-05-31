<template>
  <div>
    <div>
      <div class="bg-[rgb(230,254,228)] p-1 text-[rgb(89,50,139)] font-bold">月月开盲盒</div>
    </div>
    <div>
      <div :style="{ backgroundImage: `url(${PICUrl})` }" class="w-full pb-[59%] bg-contain"></div>
    </div>
    <div class="bg-[rgb(226,248,150)] p-2">
      <Card>
        <div class="text-[rgb(89,50,139)] flex text-xl items-center justify-between mb-4">
          <div class="flex font-bold">
            <div class="mr-2">Step1</div>
            <div class="">填写盲盒信息</div>
          </div>
          <div class="flex mr-2">
            <div class="text-xs mr-2">目的地</div>
            <div class="text-xs">出发日期</div>
          </div>
        </div>
        <div class="bg-[rgb(247,245,255)] rounded text-lg font-bold p-2 mb-4">
          <div>选一个出发地</div>
        </div>
        <div class="bg-[rgb(247,245,255)] rounded text-lg font-bold p-2">
          <div>添加实名乘机人</div>
        </div>
        <div class="border border-dashed border-[0] border-b-[2px] border-[rgb(89,50,139)] mt-8"></div>
        <div class="text-[rgb(89,50,139)] flex text-xl items-center justify-between pt-4">
          <div class="flex font-bold">
            <div class="mr-2">Step2</div>
            <div class="">完成好友助力</div>
          </div>
        </div>
      </Card>
      <Card class="mt-2">
        <div class="text-[rgb(89,50,139)] font-bold text-lg">同城旅行机票盲盒</div>
        <div class="bg-[rgb(247,245,255)] p-4 mt-2">
          <div class="text-[rgb(189,84,80)] font-bold">每月一期，每天10点!</div>
          <div>198元 单程机票，不喜欢? 全额退!</div>
        </div>
      </Card>
      <Card class="mt-2">
        <div class="flex justify-center">
          <div class="text-[rgb(89,50,139)] font-bold text-lg">目的地盲盒规则介绍</div>
        </div>
        <div>
          <div class="font-bold">销售规则:</div>
          <div>每期活动，同一账号，同一乘机人，同一渠道，通过邀请好友助力可获得1次购买机会!可自选出发城市(不能精确到机场)</div>
          <div class="font-bold mt-1">出发日期是什么时候</div>
          <div>未来3到30天内随机抽取</div>
          <div class="font-bold mt-1">目的地有哪些:</div>
          <div>目的地会在所选出发地，对应的已通航的全国任意目的地城市中随机抽取，本期产品暂时不含港澳台地区</div>
          <div class="font-bold mt-1">198元包含哪些费用:</div>
          <div>包含单程机票的票价以及机建燃油费用</div>
          <div class="font-bold mt-1">乘机人规则:</div>
          <div>乘机人需满12周岁，非失信人，并通过实名认证(实名认证失败的用户无法参与购买)，盲盒购买后机票乘机人不可修改</div>
          <div class="font-bold mt-1">锁定须知:</div>
          <div>
            盲盒开出机票后为您保留最多15分钟，过期视为放弃并全额退款，锁定时请务必认真核对机票信息，活动一旦锁定，盲盒及机票均不支持退改盲盒机票锁定时有概率会遇到当前机票的余票售空导致锁定失败，该情况无法避免。当锁定失败时，您可以选择主动放弃即可全额退款，也可以选择再开一个。一旦出现此类低概率事件，敬请谅解
          </div>
          <div class="font-bold mt-1">助力即赠</div>
          <div>助力元成后系统会动赠送怒个机票代金券，可至”同程旅行小程序-我的-红包优惠券“处查看和使用</div>
          <div class="font-bold mt-1">退改规则:</div>
          <div>
            当您购买并开启盲盒后，若对其不满意，您可选择放弃，系统将全额为您退款，退款将在3个工作日内退回支付账户。若您选择锁定，盲盒及机票均不支持自愿退改。
          </div>
          <div class="font-bold mt-1">航变退改:</div>
          <div>如遇航班取消等场景时，可根据航司的规定进行非自愿免费改期或退票，请联系客服95711进行处理</div>
          <div class="font-bold mt-1">盲盒订单如何查看和使用:</div>
          <div>
            锁定成功后，对应机票订单可在“我的-全部订单”中查看，并按照订单起飞时间出行(如遇航变，则按航变后起飞时间出行)，过期未出行则机票自动作废
          </div>
          <div class="font-bold mt-1">出行须知:</div>
          <div>60周岁及以上的乘客(以乘机时间为准)，请在出行 前请致电95711咨询您乘坐的航班是否需要开具健康 证明等规定</div>
          <div class="font-bold mt-1">其他说明:</div>
          <div>
            活动期间，若用户出现违规行为 (包括且不限于通过 作弊领取，虚假交易等)，同程旅行将取消用户活动
            资格，必要时同程旅行将追究违规用户的法律责任
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>
<script lang="ts" setup>
import PICUrl from '@/assets/pic.png';
import Card from './component/card.vue';
</script>
