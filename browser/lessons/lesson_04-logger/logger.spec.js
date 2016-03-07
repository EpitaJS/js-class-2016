import FancyLogger from './logger';

context('[Lesson 4]', function () {

  describe('fancy logger', function () {
    let clock;

    beforeEach(function () {
      clock = sinon.useFakeTimers(0, 'Date'); // needed to have a reproducible timestamp
    });
    afterEach(function () {
      clock.restore();
    });

    beforeEach(function () {
      sinon.spy(console, 'log');
      sinon.spy(console, 'info');
      sinon.spy(console, 'warn');
      sinon.spy(console, 'error');
    });
    afterEach(function () {
      console.error.restore;
      console.warn.restore;
      console.info.restore;
      console.log.restore;
    });

    it('should forward to proper functions', function () {
      const logger = FancyLogger.create('TEST');

      logger.log('hello');
      expect(console.log).to.have.been.calledOnce;

      logger.info('hello');
      expect(console.info).to.have.been.calledOnce;

      logger.warn('hello');
      expect(console.warn).to.have.been.calledOnce;

      logger.error('hello');
      expect(console.error).to.have.been.calledOnce;
    });

    it('should add the date and the radix', function () {
      const logger = FancyLogger.create('TEST');

      logger.log('log');
      expect(console.log).to.have.been.calledWith('1970/01/01 00:01:00.000 - TEST - 😊 - log');

      logger.info('info');
      expect(console.log).to.have.been.calledWith('1970/01/01 00:01:00.000 - TEST - 😔 - info');

      logger.warn('warn');
      expect(console.log).to.have.been.calledWith('1970/01/01 00:01:00.000 - TEST - 😫 - warn');

      logger.error('error !');
      expect(console.log).to.have.been.calledWith('1970/01/01 00:01:00.000 - TEST - 😱 - error !');
    });

    it('should handle both log invocation form', function () {
      const logger = FancyLogger.create();

      let user = {
        name: 'John',
        points: 12345
      };

      logger.log('User %s has %d points', user.name, user.points);
      expect(console.log).to.have.been.calledWith('1970/01/01 00:01:00.000 - TEST - 😊 - User John has 12345 points');

      logger.log(user);
      expect(console.log).to.have.been.calledWith('1970/01/01 00:01:00.000 - TEST - 😊 - hello');
    });
  });
});
