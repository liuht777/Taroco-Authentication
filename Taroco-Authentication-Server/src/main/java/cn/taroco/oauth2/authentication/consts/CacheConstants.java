package cn.taroco.oauth2.authentication.consts;

/**
 * 缓存常量
 *
 * @author liuht
 * 2019/4/25 10:20
 */
public interface CacheConstants {

    /**
     * 缓存分隔符
     */
    String SPLIT = ":";

    /**
     * TAROCO缓存公共前缀
     */
    String PREFIX = "taroco" + SPLIT;

    /**
     * 验证码缓存key
     */
    String DEFAULT_CODE_KEY = PREFIX + "code" + SPLIT;

    /**
     * 默认过期时间 60秒
     */
    int DEFAULT_EXPIRE_SECONDS = 60;
}
