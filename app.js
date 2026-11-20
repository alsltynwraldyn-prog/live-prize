const shareButton = document.querySelector('#share');
const shareStatus = document.querySelector('#share-status');
const payoutMethod = document.querySelector('#payout-method');
const payoutDetails = document.querySelector('#payout-details');
const verifyButton = document.querySelector('#verify-provider');
const verificationStatus = document.querySelector('#verification-status');

const params = new URLSearchParams(location.search);
let code = params.get('ref');
if (!code) code = 'LP-' + Math.random().toString(36).slice(2, 9).toUpperCase();
const inviteUrl = new URL(location.href);
inviteUrl.searchParams.set('ref', code);

shareButton.addEventListener('click', async () => {
  try {
    if (navigator.share) {
      await navigator.share({ title: 'LIVE PRIZE', text: 'اطّلع على شروط برنامج المكافآت والمشاركة.', url: inviteUrl.href });
    } else {
      await navigator.clipboard.writeText(inviteUrl.href);
      shareStatus.textContent = 'تم نسخ رابط الدعوة.';
    }
  } catch (error) {
    shareStatus.textContent = 'يمكنك نسخ الرابط من شريط العنوان ومشاركته.';
  }
});

payoutMethod.addEventListener('change', () => {
  payoutDetails.hidden = !payoutMethod.value;
  verificationStatus.textContent = 'التحقق الرسمي غير مربوط في النسخة التجريبية.';
});

verifyButton.addEventListener('click', () => {
  verificationStatus.textContent = 'لم يتم الانتقال أو إرسال أي بيانات. يلزم ربط واعتماد بوابة التحقق الرسمية للمحفظة أولاً.';
});